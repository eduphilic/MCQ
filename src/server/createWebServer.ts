import { ContextFunction } from "apollo-server-core";
import assert from "assert";
import cloudinary from "cloudinary";
import Koa from "koa";
import {
  createApolloServer,
  createApolloTypeDefs,
  createContext,
  resolvers,
} from "../api/serverSideExports";
import { getInitializedFirebaseEnvironment } from "./getInitializedFirebaseEnvironment";
import {
  createAllowCachingMiddleware,
  createCSRFMiddleware,
  createGraphQLPlaygroundMiddleware,
  createSessionMiddleware,
  createStaticMiddleware,
} from "./middleware";
import { createRenderMiddleware } from "./middleware/createRenderMiddleware";

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
  let cloudinaryCloudName: string;
  let cloudinaryApiKey: string;
  let cloudinaryApiSecret: string;

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

    cloudinaryCloudName = functions.config().cloudinary.cloud_name;
    assert(cloudinaryCloudName, "cloudinaryCloudName");
    cloudinaryApiKey = functions.config().cloudinary.api_key;
    assert(cloudinaryApiKey, "cloudinaryApiKey");
    cloudinaryApiSecret = functions.config().cloudinary.api_secret;
    assert(cloudinaryApiSecret, "cloudinaryApiSecret");
  } catch (e) {
    throw new Error(`Could not load environmental variables: ${e}`);
  }

  /* tslint:disable-next-line:no-console */
  console.log(
    `Cookie expiration set to ${koaCookieExpireSeconds / 60 / 60 / 24} days.`,
  );

  /* tslint:disable-next-line:no-console */
  console.log(`Cloudinary "cloud_name" set to: ${cloudinaryCloudName}`);
  cloudinary.config({
    cloud_name: cloudinaryCloudName,
    api_key: cloudinaryApiKey,
    api_secret: cloudinaryApiSecret,
  });
  /* tslint:disable-next-line:no-console */
  console.log("Cloudinary SDK initialized.");

  // Create context factory for Apollo Server and server side Apollo Client.
  const contextFactory: ContextFunction = async ({ ctx }) => {
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

  const app = new Koa();
  app.keys = [koaKey0, koaKey1];
  app.use(createAllowCachingMiddleware());
  app.use(createCSRFMiddleware());
  app.use(
    createSessionMiddleware(
      { cookieExpireSeconds: koaCookieExpireSeconds },
      app,
    ),
  );
  app.use(createStaticMiddleware());
  app.use(
    createRenderMiddleware({
      contextFactory,
      typeDefs: createApolloTypeDefs(),
      resolvers,
    }),
  );
  app.use(createGraphQLPlaygroundMiddleware(contextFactory));

  const apolloServer = createApolloServer(contextFactory);
  apolloServer.applyMiddleware({
    app,
    bodyParserConfig: false,
    cors: false,
  });

  return app.callback();
}
