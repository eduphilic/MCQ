import { Context } from "koa";
import { StaticRouterContext, StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";
import { App } from "../app";
import React from "react";

const assets: { client: { js: string; css?: string } } = require(process.env
  .RAZZLE_ASSETS_MANIFEST!);

export const renderApp = async (ctx: Context) => {
  const context: StaticRouterContext = {};
  const markup = renderToString(
    <StaticRouter context={context} location={ctx.url}>
      <App />
    </StaticRouter>,
  );

  if (context.url) {
    ctx.redirect(context.url);
    return;
  }

  ctx.status = 200;
  ctx.body = `<!doctype html>
<html lang="">
  <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charset="utf-8" />
      <title>Welcome to Razzle</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${
        assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ""
      }
      ${
        process.env.NODE_ENV === "production"
          ? `<script src="${assets.client.js}" defer></script>`
          : `<script src="${assets.client.js}" defer crossorigin></script>`
      }
  </head>
  <body>
      <div id="root">${markup}</div>
  </body>
</html>`;
};
