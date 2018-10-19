import * as functions from "firebase-functions";
import Koa from "koa";
import { renderApp } from "./renderApp";

const app = new Koa();

app.use(renderApp);

export const main = functions.https.onRequest(app.callback());
