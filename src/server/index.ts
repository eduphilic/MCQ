import * as functions from "firebase-functions";
import Koa from "koa";
import serve from "koa-static";
import { applyApolloServerMiddleware } from "./applyApolloServerMiddleware";
import { middlewareRenderApp } from "./middlewareRenderApp";

const app = new Koa();

applyApolloServerMiddleware(app);
if (process.env.NODE_ENV === "development") {
  app.use(serve(process.env.RAZZLE_PUBLIC_DIR!));
}
app.use(middlewareRenderApp);

export const main = functions.https.onRequest(app.callback());
