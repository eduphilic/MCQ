import Koa from "koa";
import { getInitializedFirebaseEnvironment } from "./getInitializedFirebaseEnvironment";

const { functions } = getInitializedFirebaseEnvironment();

/**
 * Return a configured Koa webserver instance.
 */
export function createWebServer() {
  const app = new Koa();
  app.keys = [functions.config().koa.key0, functions.config().koa.key1];

  return app.callback();
}
