import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import Koa from "koa";
import path from "path";

import { ApolloContext } from "./ApolloContext";
import { getApolloTypeDefs } from "./getApolloTypeDefs";
import { getEnvironmentalVariables } from "./getEnvironmentalVariables";
import { getFirebaseRemoteConfigClientCredentials } from "./getFirebaseRemoteConfigClientCredentials";
import {
  applyApolloServerMiddleware,
  createNextJsMiddleware,
  createStorybookMiddleware,
} from "./middleware";
import { createFirebaseRemoteConfigClient } from "./services";

const dev = process.env.NODE_ENV !== "production";
const app = new Koa();

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

async function bootstrap() {
  const config = await getEnvironmentalVariables();
  app.keys = [config.koa.key0, config.koa.key1];

  const firebaseServiceAccountCredentials = getFirebaseRemoteConfigClientCredentials();
  const firebaseRemoteConfigClient = await createFirebaseRemoteConfigClient({
    credentials: firebaseServiceAccountCredentials,
    dev,
    templatePath: path.resolve(
      __dirname,
      "../../config/firebase-remote-config-template.json",
    ),
  });

  admin.initializeApp(functions.config().firebase);
  const firebaseDatabase = admin.firestore();

  // This should be placed here above the Storybook and Next.js middlewares due
  // to needing to respond to urls before they are proxied.
  applyApolloServerMiddleware({
    koaApp: app,
    contextFactory: async (): Promise<ApolloContext> => {
      return {
        firebaseRemoteConfigClient,
        firebaseDatabase,
      };
    },
    typeDefs: getApolloTypeDefs(),
  });

  app.use(
    createStorybookMiddleware({
      dev,
      devPort: 9001,
      staticPath: path.resolve(__dirname, "storybook"),
    }),
  );

  app.use(
    createNextJsMiddleware({
      dev,
      devPort: 3000,
      relativeStaticPath: "next",
    }),
  );
}

const bootstrapStatus = bootstrap().then(() => app.callback());

function handleRequest(req: any, res: any) {
  // tslint:disable-next-line:no-floating-promises
  bootstrapStatus.then(appCallback => {
    appCallback(req, res);
  });
}

export const main = functions.https.onRequest(handleRequest);
