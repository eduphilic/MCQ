import { Context } from "koa";
import CSRF from "koa-csrf";

export function createCSRFMiddleware() {
  const csrfMiddleware = new CSRF({
    disableQuery: true,
  });

  // Attach a CSRF token to responses so that the web app will always have a
  // non-expired token in the event the application is left running long enough.
  return async (ctx: Context, next: () => Promise<any>) => {
    await csrfMiddleware(ctx, async () => {
      ctx.set("x-xsrf-token", ctx.csrf);

      await next();
    });
  };
}
