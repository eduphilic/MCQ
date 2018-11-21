import Koa from "koa";
import * as functions from "firebase-functions";

const app = new Koa();

export const main = functions.https.onRequest(app.callback());
