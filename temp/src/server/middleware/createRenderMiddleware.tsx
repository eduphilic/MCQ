import fs from "fs";
import path from "path";

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { SchemaLink } from "apollo-link-schema";
import { ContextFunction } from "apollo-server-core";
import { DocumentNode } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { Context } from "koa";
import { Context as ApolloServerContext, HtmlConfig } from "../../api";

import {
  createGenerateClassName,
  jssPreset,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { ServerLocation } from "@reach/router";
import { create, SheetsRegistry } from "jss";
import React from "react";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import { renderToStaticMarkup } from "react-dom/server";
import { JssProvider } from "react-jss";
import { Capture, preloadAll } from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { App } from "../../App";
import { Html } from "../../layouts/Html";
import { lightTheme } from "../../styled/themes";

export function createRenderMiddleware(options: {
  contextFactory: ContextFunction<any>;
  typeDefs: DocumentNode;
  resolvers: any; // TODO: Fix this definition.
}) {
  // Code splitting setup.
  // https://github.com/jamiebuilds/react-loadable#preloading-all-your-loadable-components-on-the-server
  const componentPreloadPromise = preloadAll();

  const assets: { client: { js: string; css?: string } } = require(process.env
    .RAZZLE_ASSETS_MANIFEST!);

  return async (ctx: Context, next: () => Promise<any>) => {
    const schema = makeExecutableSchema({
      typeDefs: options.typeDefs,
      resolvers: options.resolvers,
    });
    const context: ApolloServerContext = await options.contextFactory({ ctx });

    const client = new ApolloClient({
      ssrMode: true,
      link: new SchemaLink({ schema, context }),
      cache: new InMemoryCache(),
    });

    const htmlConfig = (await context.configurationRepository.getParameterByKey(
      "htmlConfig",
    )) as HtmlConfig;

    // Code splitting setup.
    await componentPreloadPromise;
    const modules: string[] = [];

    let bundles = getBundles(getReactLoadableBundleStats(), modules);
    bundles = bundles.filter(b => !/\.map$/.test(b.file));

    // https://material-ui.com/guides/server-rendering/#handling-the-request
    const sheetsRegistry = new SheetsRegistry();
    const sheetsManager = new Map();
    const generateClassName = createGenerateClassName();
    const jss = create({ ...jssPreset() });

    // https://www.styled-components.com/docs/advanced#example
    const sheet = new ServerStyleSheet();

    const component = (
      <Capture report={moduleName => modules.push(moduleName)}>
        <StyleSheetManager sheet={sheet.instance}>
          <JssProvider
            jss={jss}
            registry={sheetsRegistry}
            generateClassName={generateClassName}
          >
            <MuiThemeProvider theme={lightTheme} sheetsManager={sheetsManager}>
              <ApolloProvider client={client}>
                <ServerLocation url={ctx.url}>
                  <App />
                </ServerLocation>
              </ApolloProvider>
            </MuiThemeProvider>
          </JssProvider>
        </StyleSheetManager>
      </Capture>
    );
    const content = await getDataFromTree(component);

    // https://www.styled-components.com/docs/advanced#example
    const styleElements = sheet.getStyleElement();

    const html = (
      <Html
        content={content}
        assets={assets}
        cache={client.cache}
        reactLoadableBundles={bundles}
        materialUiCss={sheetsRegistry.toString().split("\n").map(l => l.trim()).join("")} // prettier-ignore
        styledComponentsStyleElements={styleElements}
        csrfToken={ctx.csrf}
        googleAnalyticsId={htmlConfig.googleAnalyticsId}
        metaKeywords={htmlConfig.metaKeywords}
        metaDescription={htmlConfig.metaDescription}
        metaAuthor={htmlConfig.metaAuthor}
        metaAbstract={htmlConfig.metaAbstract}
        metaCopyright={htmlConfig.metaCopyright}
      />
    );

    ctx.body = `<!doctype html>\n${renderToStaticMarkup(html)}`;
    return next();
  };
}

// https://github.com/jamiebuilds/react-loadable#mapping-loaded-modules-to-bundles
function getReactLoadableBundleStats(): LoadableExportManifest {
  let cachedStats: LoadableExportManifest | null = null;

  if (!cachedStats) {
    const statsPath = path.resolve(__dirname, "react-loadable.json");
    const statsFileContents = fs.readFileSync(statsPath, "utf8");

    // For some reason, on initial load, the route pages have the file extension
    // attached on the keys. On hot reload, the extension is removed. Hack to
    // remove them:
    const statsContent = JSON.parse(statsFileContents);
    Object.keys(statsContent).forEach(key => {
      const oldKey = key;
      const newKey = key.replace(/\.tsx?$/, "");
      if (oldKey !== newKey) {
        statsContent[newKey] = statsContent[oldKey];
        delete statsContent[oldKey];
      }
    });

    // Exit early in development to prevent caching the stats. Not caching the
    // stats allows reloading to function.
    if (process.env.NODE_ENV === "development") return statsContent;

    cachedStats = statsContent;
  }

  return cachedStats!;
}
type LoadableExportManifest = {
  [moduleId: string]: ReturnType<typeof getBundles>;
};
