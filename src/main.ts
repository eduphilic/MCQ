import * as admin from "firebase-admin";
import { INestExpressApplication, INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import express from "express";
import { ApplicationModule } from "./server";
import { NextRendererMiddleware } from "./server/next-renderer";

admin.initializeApp({
  credential: admin.credential.cert(
    process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_CREDENTIALS,
  ),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const isFirebaseFunction = !!process.env.FIREBASE_CONFIG;
const expressServer = express();
let nestApp: INestApplication & INestExpressApplication;

/**
 * Bootstrap the server. Returns a cached resolved promise if the bootstrap
 * process was finished during a prior request.
 */
const bootstrap = (() => {
  let progress: Promise<void> = initialize();

  return returnProgress;

  async function returnProgress(forceReinitialization?: boolean) {
    if (forceReinitialization) progress = initialize();
    return progress;
  }

  async function initialize() {
    nestApp = await NestFactory.create(ApplicationModule, expressServer);
    const nextRendererMiddleware = nestApp.get(NextRendererMiddleware);
    nestApp.use(nextRendererMiddleware.resolve([/^\/graphql/]));

    // Don't listen for requests if the server is operating as a Firebase
    // Function.
    return (isFirebaseFunction ? nestApp.init() : nestApp.listen(3000)).catch(
      e => {
        // eslint-disable-next-line no-console
        console.error(`Server initialization failure: ${e}`);
        process.exit(1);
      },
    );
  }
})();

export const main = isFirebaseFunction
  ? // eslint-disable-next-line global-require
    (require("firebase-functions") as typeof import("firebase-functions")).https.onRequest(
      async (req, res) => {
        await bootstrap();
        expressServer(req, res);
      },
    )
  : null;

if (module.hot) {
  module.hot.accept("./server", () => {
    // tslint:disable-next-line:no-floating-promises
    nestApp.close().then(async () => bootstrap(true));
  });
}

// The following are injected by the Webpack build process.
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      FIREBASE_ADMIN_SERVICE_ACCOUNT_CREDENTIALS: string;
      FIREBASE_DATABASE_URL: string;
    }
  }
}
