import { ApolloCache } from "apollo-cache";
import React, { ReactElement } from "react";

export type HtmlProps<Cache extends ApolloCache<any>> = {
  content: string;
  cache: Cache;
  assets: {
    client: {
      js: string;
      css?: string;
    };
  };
  materialUiCss: string;
  styledComponentsStyleElements: ReactElement<any>[];
};

export const Html = <Cache extends ApolloCache<any>>({
  content,
  cache,
  assets,
  materialUiCss,
  styledComponentsStyleElements,
}: HtmlProps<Cache>) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700"
      />

      {/* https://material-ui.com/customization/css-in-js/#css-injection-order */}
      <noscript id="jss-insertion-point" />

      {/* https://material-ui.com/guides/server-rendering/#inject-initial-component-html-and-css */}
      <style
        id="jss-server-side"
        dangerouslySetInnerHTML={{ __html: materialUiCss }}
      />

      {/* https://www.styled-components.com/docs/advanced#example */}
      {styledComponentsStyleElements}

      {assets.client.css && <link rel="stylesheet" href={assets.client.css} />}
    </head>

    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
      <script
        charSet="UTF-8"
        dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__=${JSON.stringify(cache.extract())}`,
        }}
      />
      <script
        src={assets.client.js}
        defer
        crossOrigin={process.env.NODE_ENV === "production" ? "true" : undefined}
      />
    </body>
  </html>
);
