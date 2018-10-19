import { Context } from "koa";
import { ServerLocation, isRedirect } from "@reach/router";
import { renderToString } from "react-dom/server";
import { App } from "../app";
import React from "react";

const assets: { client: { js: string; css?: string } } = require(process.env
  .RAZZLE_ASSETS_MANIFEST!);

export const renderApp = async (ctx: Context) => {
  let markup: string;

  try {
    markup = renderToString(
      <ServerLocation url={ctx.url}>
        <App />
      </ServerLocation>,
    );
  } catch (e) {
    if (isRedirect(e)) {
      ctx.redirect(e.uri);
      return;
    }
    throw e;
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
