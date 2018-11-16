import { Context } from "koa";

/**
 * Static file middleware. Serve static files in development only. In
 * production, Firebase Hosting handles this.
 */
export function createStaticMiddleware() {
  if (process.env.NODE_ENV === "development") {
    const serve: typeof import("koa-static") = require("koa-static");

    return serve(process.env.RAZZLE_PUBLIC_DIR!);
  }

  return (_ctx: Context, next: () => Promise<any>) => {
    return next();
  };
}
