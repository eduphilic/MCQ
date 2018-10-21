import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import Koa from "koa";
import { createServer } from "../graphql";
import { middlewareRenderApp } from "./middlewareRenderApp";

const firebaseApp = admin.initializeApp();
const app = new Koa();

if (process.env.NODE_ENV === "development") {
  const serve: typeof import("koa-static") = require("koa-static");
  app.use(serve(process.env.RAZZLE_PUBLIC_DIR!));
}

const server = createServer({
  projectId: firebaseApp.options.projectId!,
});

server.applyMiddleware({
  app: app as any,
  bodyParserConfig: false,
  cors: false,
});

app.use(middlewareRenderApp);

export const main = functions.https.onRequest(app.callback());
