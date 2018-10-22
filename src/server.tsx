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
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import Koa, { Context } from "koa";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import { HtmlConfig } from "./models";
import { createServer, getContext, getSchema } from "./store-server";

const firebaseApp = admin.initializeApp();
const app = new Koa();

if (process.env.NODE_ENV === "development") {
  const serve: typeof import("koa-static") = require("koa-static");
  app.use(serve(process.env.RAZZLE_PUBLIC_DIR!));
}

const server = createServer({
  projectId: firebaseApp.options.projectId!,
});

server.applyMiddleware({
  app: app as any,
  bodyParserConfig: false,
  cors: false,
});

const assets: { client: { js: string; css?: string } } = require(process.env
  .RAZZLE_ASSETS_MANIFEST!);

const middlewareRenderApp = async (ctx: Context) => {
  const schema = getSchema();
  const context = getContext();
  const client = new ApolloClient({
    ssrMode: true,
    link: new SchemaLink({ schema, context }),
    cache: new InMemoryCache(),
  });

  const htmlConfig = await context.firebaseRemoteConfigClient.getFieldsByPrefix<
    HtmlConfig
  >("html");

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
