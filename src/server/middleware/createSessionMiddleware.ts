import Koa from "koa";
import session from "koa-session";

export function createSessionMiddleware(
  options: {
    cookieExpireSeconds: number;
  },
  app: Koa,
) {
  return session(
    {
      key: "__session",
      signed: false,
      maxAge: options.cookieExpireSeconds * 1000,
    },
    app,
  );
}
