import { Middleware } from "koa";
import proxy from "koa-better-http-proxy";
import nextJs from "next";

type Options = {
  dev: boolean;
  devPort: number;
  relativeStaticPath: string;
};

export function createNextJsMiddleware({
  dev,
  devPort,
  relativeStaticPath,
}: Options) {
  let middleware: Middleware;

  // Serve the compiled production version.
  if (!dev) {
    const app = nextJs({
      dev,
      conf: {
        distDir: relativeStaticPath,
        publicRuntimeConfig: {
          graphQLUri:
            process.env.GRAPHQL_URI || "https://www.joinuniform.com/graphql",
        },
      },
    });
    const handle = app.getRequestHandler();

    middleware = async ctx => {
      await app.prepare();
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    };

    return middleware;
  }

  // Proxy requests to development server.
  middleware = proxy("localhost", { port: devPort });

  return middleware;
}
