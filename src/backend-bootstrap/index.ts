/**
 * This file's role is to wire up the http request handlers for both the Nest.js
 * api (backend) and the Next.js server side rendering (frontend).
 *
 * During development, the server listens on a port and serves all routes using
 * a single Express app. The Webpack watch process will execute the server
 * automatically.
 *
 * In production, this module exports the functions for each serverless route.
 * It wraps each route handler in its own Express app to provide middleware.
 */

/* tslint:disable:no-var-requires */

// Suppress TypeScript error:
// `Cannot compile namespaces when the '--isolatedModules' flag is provided.ts(1208)`
/* tslint:disable:no-empty */
// @ts-ignore
if (true) {
}
/* tslint:enable:no-empty */

const cookieSession: typeof import("cookie-session") = require("cookie-session");
const {
  handleApiRequest,
}: typeof import("../backend/main") = require("./backend");

// This should be false in the Firebase emulator but true in production.
const isFirebaseFunction = !!process.env.FIREBASE_CONFIG;

const cookieSessionMiddleware = cookieSession({
  // This is the only cookie name supported by Firebase.
  // https://stackoverflow.com/questions/44929653/firebase-cloud-function-wont-store-cookie-named-other-than-session
  name: "__session",
  maxAge: 1209600000,
  domain: isFirebaseFunction ? "joinuniform.com" : undefined,
  secure: isFirebaseFunction,
  httpOnly: true,
  // Firebase only supports a single cookie so an encrypted JWT will be used
  // for data encoding.
  signed: false,
  overwrite: true,
});

if (process.env.NODE_ENV === "production") {
  const functions: typeof import("firebase-functions") = require("firebase-functions");
  exports.api = functions.https.onRequest(handleApiRequest);

  // Next.js emits a file containing the mapping of page routes to page
  // Javascript bundles. The Webpack build process injects the contents here:
  const pages = __NEXT_JS_PAGE_EXPORTS__;

  pages!.forEach(([nextPageExport, nextPageImport]) => {
    module.exports[nextPageExport] = functions.https.onRequest(
      createExpressHandler(nextPageImport),
    );
  });
}

if (process.env.NODE_ENV === "development") {
  const path: typeof import("path") = require("path");
  const { createServer }: typeof import("http") = require("http");
  const next: typeof import("next") = require("next");

  const nextJsApp = next({
    dev: true,
    dir: path.resolve(__dirname, "../src/frontend"),
  });
  const nextJsHandler = nextJsApp.getRequestHandler();

  // tslint:disable-next-line:no-floating-promises
  nextJsApp.prepare().then(() =>
    createServer(createExpressHandler(nextJsHandler, true)).listen(
      3000,
      (err?: Error) => {
        if (err) throw err;
        /* tslint:disable-next-line:no-console */
        console.log("> Ready on http://localhost:3000");
      },
    ),
  );
}

/**
 * Wraps the provided request handler in an Express app to attach middlewares
 * (session-cookie).
 *
 * @param handler
 * Request handler to call.
 *
 * @param enableApiRequestHandler
 * Whether or not to attach the `/api` route to the Express server. This is used
 * during development because the wrapping Express app contains both the Next.js
 * and api routes.
 */
function createExpressHandler(
  handler: (
    req: InstanceType<typeof import("http").IncomingMessage>,
    res: InstanceType<typeof import("http").ServerResponse>,
  ) => void,
  enableApiRequestHandler?: boolean,
) {
  return (
    req: InstanceType<typeof import("http").IncomingMessage>,
    res: InstanceType<typeof import("http").ServerResponse>,
  ) => {
    const express: typeof import("express") = require("express");
    const expressApp = express();

    // Api request handling:
    if (enableApiRequestHandler) expressApp.all("/api/*", handleApiRequest);

    // Cookie handling:
    expressApp.use((_middlewareReq, middlewareRes, next) => {
      // Set the cache header, otherwise the cookie is discarded.
      // https://stackoverflow.com/questions/44929653/firebase-cloud-function-wont-store-cookie-named-other-than-session
      middlewareRes.setHeader("Cache-Control", "private");
      next();
    });
    expressApp.use(cookieSessionMiddleware);

    // Handle path url missing slash in Firebase emulator:
    expressApp.use((middlewareReq, _middlewareRes, next) => {
      if (middlewareReq.url === "") middlewareReq.url = "/";
      next();
    });

    // Next.js rendering:
    expressApp.get("*", handler);
    expressApp(req, res);
  };
}

declare var __NEXT_JS_PAGE_EXPORTS__:
  | [
      string,
      (
        req: InstanceType<typeof import("http").IncomingMessage>,
        res: InstanceType<typeof import("http").ServerResponse>,
      ) => void
    ][]
  | undefined;
