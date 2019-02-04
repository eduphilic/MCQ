import { INestApplication, INestExpressApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import express from "express";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { ApplicationModule } from "./server";

const adminConfig: admin.AppOptions = JSON.parse(process.env.FIREBASE_CONFIG);
adminConfig.credential = admin.credential.cert(process.env
  .FIREBASE_ADMIN_SERVICE_ACCOUNT_CREDENTIALS as admin.ServiceAccount);
admin.initializeApp(adminConfig);

const isFirebaseFunction = JSON.parse(process.env.IS_FIREBASE_FUNCTION);
let expressServer: ReturnType<typeof express>;
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
    if (nestApp) {
      await nestApp.close();
    }
    expressServer = express();
    nestApp = await NestFactory.create(ApplicationModule, expressServer);

    // Don't listen for requests if the server is operating as a Firebase
    // Function.
    return (isFirebaseFunction ? nestApp.init() : nestApp.listen(3000)).catch(
      e => {
        // tslint:disable-next-line:no-console
        console.error("Server initialization failure:", e);
        process.exit(1);
      },
    );
  }
})();

export const main = functions.https.onRequest(async (req, res) => {
  await bootstrap();
  expressServer(req, res);
});

if (module.hot) {
  module.hot.accept("./server", () => {
    // tslint:disable-next-line:no-floating-promises
    nestApp.close().then(async () => bootstrap(true));
  });
}
