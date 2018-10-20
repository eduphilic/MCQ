import {
  createGenerateClassName,
  jssPreset,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { isRedirect, ServerLocation } from "@reach/router";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { SchemaLink } from "apollo-link-schema";
import { create, SheetsRegistry } from "jss";
import { Context } from "koa";
import React from "react";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import JssProvider from "react-jss/lib/JssProvider";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { App } from "../app";
import { Html } from "../app/layouts";
import { lightTheme } from "../app/styled/themes";
import { schema } from "./applyApolloServerMiddleware";

// import { createHttpLink } from "apollo-link-http";
// import fetch from "node-fetch";

const assets: { client: { js: string; css?: string } } = require(process.env
  .RAZZLE_ASSETS_MANIFEST!);

export const middlewareRenderApp = async (ctx: Context) => {
  const client = new ApolloClient({
    ssrMode: true,
    // link: createHttpLink({
    //   uri: "http://localhost:5000/graphql",
    //   credentials: "same-origin",
    //   fetch: fetch as any,
    // }),
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
  });

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
