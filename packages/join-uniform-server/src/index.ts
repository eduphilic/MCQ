import * as functions from "firebase-functions";
import http from "http";
import Koa from "koa";
import koaProxy from "koa-better-http-proxy";
import koaMount from "koa-mount";
import KoaRouter from "koa-router";
import koaStatic from "koa-static";
import nextJs from "next";
import { PassThrough } from "stream";

const dev = process.env.NODE_ENV !== "production";
const nextApp = nextJs({ dev, conf: { distDir: "next" } });
const nextHandle = nextApp.getRequestHandler();
const koaApp = new Koa();
const koaRouter = new KoaRouter();

async function bootstrap() {
  if (!dev) {
    // Storybook static build.
    koaRouter.all(
      "/storybook/*",
      koaMount("/storybook", koaStatic("storybook")),
    );

    // Next.js.
    koaRouter.all("*", async ctx => {
      await nextApp.prepare();
      await nextHandle(ctx.req, ctx.res);
      ctx.respond = false;
    });
  }

  if (dev) {
    // Storybook development server. Stop middleware chain here to prevent
    // hangup due to the Next.js proxy below.
    koaRouter.all("/storybook/*", ctx =>
      koaMount("/storybook", koaProxy("localhost", { port: 9001 }))(ctx, () =>
        Promise.resolve(),
      ),
    );

    // Storybook's Hot Module Replacement events.
    koaRouter.all("*", async (ctx, next) => {
      if (ctx.url !== "/__webpack_hmr") {
        await next();
      }

      const stream = new PassThrough();
      const req = http.request(
        {
          agent: false,
          hostname: "localhost",
          port: 9001,
          path: "/__webpack_hmr",
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            Connection: "keep-alive",
          },
        },
        res => {
          res.on("data", chunk => stream.write(chunk));
        },
      );

      ctx.type = "text/event-stream";
      ctx.body = stream;

      ["close", "error"].forEach(eventType =>
        req.on(eventType, () => ctx.res.end()),
      );

      req.end();
    });

    // Next.js development server.
    koaRouter.all("*", koaProxy("localhost", { port: 3000 }));
  }

  koaApp.use(koaRouter.routes());
  koaApp.use(koaRouter.allowedMethods());
}

bootstrap();

export const main = functions.https.onRequest(koaApp.callback());
