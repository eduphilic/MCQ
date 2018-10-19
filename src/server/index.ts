import * as functions from "firebase-functions";
import Koa from "koa";
import { applyApolloServerMiddleware } from "./applyApolloServerMiddleware";
import { middlewareRenderApp } from "./middlewareRenderApp";

const app = new Koa();

applyApolloServerMiddleware(app);
app.use(middlewareRenderApp);

export const main = functions.https.onRequest(app.callback());
