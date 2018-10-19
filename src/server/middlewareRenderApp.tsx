import { isRedirect, ServerLocation } from "@reach/router";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { Context } from "koa";
import fetch from "node-fetch";
import React from "react";
import { ApolloProvider, renderToStringWithData } from "react-apollo";
import { renderToStaticMarkup } from "react-dom/server";
import { App } from "../app";
import { Html } from "../app/layouts";

const assets: { client: { js: string; css?: string } } = require(process.env
  .RAZZLE_ASSETS_MANIFEST!);

export const middlewareRenderApp = async (ctx: Context) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: "http://localhost:5000/graphql",
      credentials: "same-origin",
      fetch: fetch as any,
    }),
    cache: new InMemoryCache(),
  });

  const component = (
    <ApolloProvider client={client}>
      <ServerLocation url={ctx.url}>
        <App />
      </ServerLocation>
    </ApolloProvider>
  );

  const content = await renderToStringWithData(component);
  const html = <Html content={content} assets={assets} cache={client.cache} />;

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
