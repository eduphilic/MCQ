import cookieSession from "cookie-session";
import express, { NextFunction, Request, Response } from "express";
import { IncomingMessage, ServerResponse } from "http";
import { handleError } from "./handleError";
import { NodeHttpRequestHandler } from "./NodeHttpRequestHandler";

// This should be false in the Firebase emulator but true in production.
const isFirebaseFunction = !!process.env.FIREBASE_CONFIG;

/**
 * Wraps the provided request handler in an Express app to attach middlewares
 * (session-cookie, etc).
 *
 * @param handler
 * Request handler to call.
 *
 * @param apiHandler
 * Whether or not to attach the `/api` route to the Express server. This is used
 * during development because the wrapping Express app contains both the Next.js
 * and api routes.
 */
export function decorateHandlerWithMiddleware(
  handler: NodeHttpRequestHandler,
  apiHandler?: NodeHttpRequestHandler,
) {
  let expressApp: ReturnType<typeof express> | null = null;

  return wrappedHandler;

  function wrappedHandler(req: IncomingMessage, res: ServerResponse) {
    getExpressApp()(req, res);
  }

  function getExpressApp() {
    if (expressApp) return expressApp;
    expressApp = express();

    // Api request handling:
    if (apiHandler) expressApp.all("/api/*", apiHandler);

    // Session handling:
    expressApp.use(cookieCacheControlMiddleware);
    expressApp.use(createCookieSessionMiddleware());

    // Handle path url missing slash in Firebase emulator:
    expressApp.use(urlSlashFixMiddleware);

    // Next.js rendering or page function handler:
    expressApp.get("*", handlerWithPromiseHandler);

    return expressApp;
  }

  // Next.js returns a promise from its web request handler.
  function handlerWithPromiseHandler(
    req: IncomingMessage,
    res: ServerResponse,
  ) {
    const result = handler(req, res);
    if (result instanceof Promise) {
      result.catch(handleError);
    }
  }
}

/**
 * Set the cache header, otherwise the cookie is discarded.
 * https://stackoverflow.com/questions/44929653/firebase-cloud-function-wont-store-cookie-named-other-than-session
 */
function cookieCacheControlMiddleware(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  res.setHeader("Cache-Control", "private");
  next();
}

/**
 * The root url during Firebase requests may be passed as `""` instead of `"/"`.
 * Add the lash so routing works properly in Express.
 */
function urlSlashFixMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  if (req.url === "") req.url = "/";
  next();
}

function createCookieSessionMiddleware() {
  const cookieSessionMiddleware = cookieSession({
    // This is the only cookie name supported by Firebase.
    // https://stackoverflow.com/questions/44929653/firebase-cloud-function-wont-store-cookie-named-other-than-session
    name: "__session",
    maxAge: 1209600000,
    // TODO: Enable this once there is a mechanism for detecting whether or not
    // the cloud function is executing on the staging or production Firebase
    // project.
    // domain: isFirebaseFunction ? "joinuniform.com" : undefined,
    secure: isFirebaseFunction,
    httpOnly: true,
    // Firebase only supports a single cookie so an encrypted JWT will be used
    // for data encoding.
    signed: false,
    overwrite: true,
  });

  return cookieSessionMiddleware;
}
