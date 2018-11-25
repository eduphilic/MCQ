import * as functions from "firebase-functions";
import Koa from "koa";
import koaProxy from "koa-better-http-proxy";
import KoaRouter from "koa-router";
import nextJs from "next";
import path from "path";
import { getEnvironmentalVariables } from "./getEnvironmentalVariables";
import { createStorybookMiddleware } from "./middleware";

const dev = process.env.NODE_ENV !== "production";
const nextApp = nextJs({ dev, conf: { distDir: "next" } });
const nextHandle = nextApp.getRequestHandler();
const app = new Koa();
const koaRouter = new KoaRouter();

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

async function bootstrap() {
  const config = await getEnvironmentalVariables();
  app.keys = [config.koa.key0, config.koa.key1];

  if (!dev) {
    // Next.js.
    koaRouter.all("*", async ctx => {
      await nextApp.prepare();
      await nextHandle(ctx.req, ctx.res);
      ctx.respond = false;
    });
  }

  if (dev) {
    // Next.js development server.
    koaRouter.all("*", koaProxy("localhost", { port: 3000 }));
  }

  app.use(
    createStorybookMiddleware({
      dev,
      devPort: 9001,
      staticPath: path.resolve(__dirname, "storybook"),
    }),
  );

  app.use(koaRouter.routes());
  app.use(koaRouter.allowedMethods());
}

bootstrap();

export const main = functions.https.onRequest(app.callback());
