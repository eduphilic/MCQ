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
import { App } from "../app";
import { Html } from "../layouts";
import { lightTheme } from "../styled/themes";

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { SchemaLink } from "apollo-link-schema";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import { getContext, getSchema } from "../store-server";

import { Context } from "koa";
import { HtmlConfig } from "../models";

const assets: { client: { js: string; css?: string } } = require(process.env
  .RAZZLE_ASSETS_MANIFEST!);

export const middlewareRenderApp = async (ctx: Context) => {
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
