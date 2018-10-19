import { ApolloCache } from "apollo-cache";
import React from "react";

export type HtmlProps<Cache extends ApolloCache<any>> = {
  content: string;
  cache: Cache;
  assets: {
    client: {
      js: string;
      css?: string;
    };
  };
};

export const Html = <Cache extends ApolloCache<any>>({
  content,
  cache,
  assets,
}: HtmlProps<Cache>) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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
