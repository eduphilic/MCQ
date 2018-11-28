import * as functions from "firebase-functions";
import Koa from "koa";
import path from "path";
import { getEnvironmentalVariables } from "./getEnvironmentalVariables";
import { getFirebaseRemoteConfigClientCredentials } from "./getFirebaseRemoteConfigClientCredentials";
import {
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
  // @ts-ignore
  const values = firebaseRemoteConfigClient.getValues();
  // htmlConfig:
  // googleAnalyticsId:
  // values.htmlConfig.googleAnalyticsId = "UA-117268366-1";
  // await firebaseRemoteConfigClient.setValues(values);

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

bootstrap();

export const main = functions.https.onRequest(app.callback());
