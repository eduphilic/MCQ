import { ContextFunction } from "apollo-server-core";
import assert from "assert";
import Koa from "koa";
import { createApolloServer, createContext } from "../api";
import { getInitializedFirebaseEnvironment } from "./getInitializedFirebaseEnvironment";
import {
  createAllowCachingMiddleware,
  createSessionMiddleware,
} from "./middleware";

const {
  functions,
  firestore,
  serviceAccountCredentials,
} = getInitializedFirebaseEnvironment();

/**
 * Return a configured Koa webserver instance.
 */
export function createWebServer() {
  let koaKey0: string;
  let koaKey1: string;
  let koaCookieExpireSeconds: number;
  let koaCookieSecret: string;

  // Load secrets from Functions config and verify values were set.
  try {
    koaKey0 = functions.config().koa.key0;
    assert(koaKey0, "koaKey0");
    koaKey1 = functions.config().koa.key1;
    assert(koaKey0, "koaKey1");
    koaCookieExpireSeconds = parseInt(
      functions.config().koa.cookie_expire_seconds,
      10,
    );
    assert(koaCookieExpireSeconds, "koaCookieExpireSeconds");
    koaCookieSecret = functions.config().koa.cookie_secret;
    assert(koaCookieSecret, "koaCookieSecret");
  } catch (e) {
    throw new Error(`Could not load environmental variables: ${e}`);
  }

  /* tslint:disable-next-line:no-console */
  console.log(
    `Cookie expiration set to ${koaCookieExpireSeconds / 60 / 60 / 24} days.`,
  );

  const app = new Koa();
  app.keys = [koaKey0, koaKey1];
  app.use(createAllowCachingMiddleware());
  app.use(
    createSessionMiddleware(
      { cookieExpireSeconds: koaCookieExpireSeconds },
      app,
    ),
  );

  const contextFunction: ContextFunction = async ({ ctx }) => {
    const context = createContext({
      db: firestore,
      jwtExpirationSeconds: koaCookieExpireSeconds,
      jwtSecret: koaCookieSecret,
      koaContext: ctx,
      remoteConfigCredentials: {
        clientEmail: serviceAccountCredentials.client_email,
        privateKey: serviceAccountCredentials.private_key,
        projectId: serviceAccountCredentials.project_id,
      },
    });

    return context;
  };

  const apolloServer = createApolloServer(contextFunction);
  apolloServer.applyMiddleware({
    app,
    bodyParserConfig: false,
    cors: false,
  });

  return app.callback();
}
