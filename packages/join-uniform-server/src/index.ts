import * as functions from "firebase-functions";
import Koa from "koa";
import proxy from "koa-better-http-proxy";
import Router from "koa-router";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev, conf: { distDir: "next" } });
const handle = nextApp.getRequestHandler();

const koaApp = new Koa();
const router = new Router();

if (!dev) {
  router.all("*", async ctx => {
    await nextApp.prepare();
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
}

if (dev) {
  router.all("*", proxy("localhost", { port: 3000 }));
}

koaApp.use(router.routes());
koaApp.use(router.allowedMethods());

export const main = functions.https.onRequest(koaApp.callback());
