import { Context } from "koa";

/**
 * Firebase disables caching during development which blocks the testing of
 * session cookies.
 */
export function createAllowCachingMiddleware() {
  return (ctx: Context, next: () => Promise<any>) => {
    if (process.env.NODE_ENV === "development") {
      ctx.set("Cache-Control", "private");
    }

    return next();
  };
}
