import fs from "fs";
import path from "path";

import {
  createGenerateClassName,
  jssPreset,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { isRedirect, ServerLocation } from "@reach/router";
import { create, SheetsRegistry } from "jss";
import React from "react";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import JssProvider from "react-jss/lib/JssProvider";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { App } from "./app";
import { Html } from "./layouts";
import { lightTheme } from "./styled/themes";

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { SchemaLink } from "apollo-link-schema";
import { ApolloServer, gql, makeExecutableSchema } from "apollo-server-koa";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import Koa, { Context } from "koa";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import { LocalizationDirective } from "./features/localization/LocalizationGraphQLDirective";
import { HtmlConfig } from "./models";
import { ServerContext } from "./ServerContext";
import { resolvers } from "./serverResolvers";
import { getFirebaseRemoteConfigClient } from "./services";

const firebaseApp = admin.initializeApp();
const app = new Koa();

if (process.env.NODE_ENV === "development") {
  const serve: typeof import("koa-static") = require("koa-static");
  app.use(serve(process.env.RAZZLE_PUBLIC_DIR!));
}

// In production the schema file will be colocated with the server bundle.
const schemaString = fs.readFileSync(
  path.resolve(
    __dirname,
    process.env.NODE_ENV === "production"
      ? "schema.graphql"
      : "../schema.graphql",
  ),
  "utf8",
);

// Used by ApolloServer in server.
const typeDefs = gql`
  ${schemaString}
`;

// Used by ApolloClient in server rendered app.
const schema = makeExecutableSchema({
  typeDefs: gql`
    ${schemaString}
  `,
  resolvers,
});

const contextFactory = ({ ctx }: { ctx: Context }): ServerContext => ({
  ctx,
  firebaseRemoteConfigClient: getFirebaseRemoteConfigClient(
    firebaseApp.options.projectId!,
  ),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: contextFactory,
  schemaDirectives: {
    localized: LocalizationDirective,
  },
});

server.applyMiddleware({
  app: app as any,
  bodyParserConfig: false,
  cors: false,
});

const assets: { client: { js: string; css?: string } } = require(process.env
  .RAZZLE_ASSETS_MANIFEST!);

const middlewareRenderApp = async (ctx: Context) => {
  const context = contextFactory({ ctx });
  const client = new ApolloClient({
    ssrMode: true,
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
  });

  const htmlConfig = (await context.firebaseRemoteConfigClient.getParameterByKey(
    "htmlConfig",
  )) as HtmlConfig;

  const dataOnlyComponent = (
    <ApolloProvider client={client}>
      <ServerLocation url={ctx.url}>
        <App />
      </ServerLocation>
    </ApolloProvider>
  );
  await getDataFromTree(dataOnlyComponent);

  // https://material-ui.com/guides/server-rendering/#handling-the-request
  const sheetsRegistry = new SheetsRegistry();
  const sheetsManager = new Map();
  const generateClassName = createGenerateClassName();
  const jss = create({ ...jssPreset() });

  // https://www.styled-components.com/docs/advanced#example
  const sheet = new ServerStyleSheet();

  const component = (
    <StyleSheetManager sheet={sheet.instance}>
      <JssProvider
        jss={jss}
        registry={sheetsRegistry}
        generateClassName={generateClassName}
      >
        <MuiThemeProvider theme={lightTheme} sheetsManager={sheetsManager}>
          {dataOnlyComponent}
        </MuiThemeProvider>
      </JssProvider>
    </StyleSheetManager>
  );
  const content = renderToString(component);

  // https://www.styled-components.com/docs/advanced#example
  const styleElements = sheet.getStyleElement();

  const html = (
    <Html
      content={content}
      assets={assets}
      cache={client.cache}
      materialUiCss={sheetsRegistry
        .toString()
        .split("\n")
        .map(l => l.trim())
        .join("")}
      styledComponentsStyleElements={styleElements}
      googleAnalyticsId={htmlConfig.googleAnalyticsId}
      metaKeywords={htmlConfig.metaKeywords}
      metaDescription={htmlConfig.metaDescription}
      metaAuthor={htmlConfig.metaAuthor}
      metaAbstract={htmlConfig.metaAbstract}
      metaCopyright={htmlConfig.metaCopyright}
    />
  );

  // Reach Router throws on redirect
  try {
    ctx.body = `<!doctype html>\n${renderToStaticMarkup(html)}`;
  } catch (e) {
    if (isRedirect(e)) {
      ctx.redirect(e.uri);
      return;
    }

    throw e;
  }
};

app.use(middlewareRenderApp);

export const main = functions.https.onRequest(app.callback());
