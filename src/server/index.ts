import * as functions from "firebase-functions";
import Koa from "koa";
import { middlewareRenderApp } from "./middlewareRenderApp";
import { applyApolloServerMiddleware } from "./applyApolloServerMiddleware";

const app = new Koa();

applyApolloServerMiddleware(app);
app.use(middlewareRenderApp);

export const main = functions.https.onRequest(app.callback());
