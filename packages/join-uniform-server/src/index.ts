import * as functions from "firebase-functions";
import Koa from "koa";
import path from "path";
import { getEnvironmentalVariables } from "./getEnvironmentalVariables";
import {
  createNextJsMiddleware,
  createStorybookMiddleware,
} from "./middleware";

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
