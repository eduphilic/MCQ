import http from "http";
import { Middleware } from "koa";
import proxy from "koa-better-http-proxy";
import serve from "koa-static";
import { PassThrough } from "stream";

type Options = {
  dev: boolean;
  staticPath: string;
  devPort: number;
};

const urlRegex = /^\/storybook\//;
const urlTrimRegex = /^\/storybook/;

export function createStorybookMiddleware({
  dev,
  devPort,
  staticPath,
}: Options) {
  let middleware: Middleware;

  // Serve static build of Storybook.
  if (!dev) {
    middleware = async (ctx, next) => {
      if (!urlRegex.test(ctx.url)) return next();

      ctx.url = ctx.url.replace(urlTrimRegex, "");
      return serve(staticPath)(ctx, () => Promise.resolve());
    };
    return middleware;
  }

  // Proxy to Storybook development server;
  middleware = async (ctx, next) => {
    if (!urlRegex.test(ctx.url)) return next();

    ctx.url = ctx.url.replace(urlTrimRegex, "");
    return proxy("localhost", { port: devPort })(ctx, () => Promise.resolve());
  };

  // Proxy Storybook's development server's Hot Module Replacement event stream.
  const proxyMiddleware = middleware;
  middleware = async (ctx, next) => {
    if (ctx.url !== "/__webpack_hmr") return proxyMiddleware(ctx, next);

    const stream = new PassThrough();
    const req = http.request(
      {
        agent: false,
        hostname: "localhost",
        port: devPort,
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
  };

  return middleware;
}
