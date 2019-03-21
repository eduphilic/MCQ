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

// Backend api bundle is imported from location relative to final location in
// "dist" folder. Webpack is configured to not bundle this file or the Next.js
// pages.
const {
  handleApiRequest,
}: typeof import("../backend/main") = require("./backend");

if (process.env.NODE_ENV === "production") {
  const getFirebaseFunctionExports = (require("./main.production") as typeof import("./main.production"))
    .getFirebaseFunctionExports;
  module.exports = getFirebaseFunctionExports(handleApiRequest);
}

if (process.env.NODE_ENV === "development") {
  const startDevelopmentServer = (require("./main.development") as typeof import("./main.development"))
    .startDevelopmentServer;

  startDevelopmentServer(handleApiRequest);
}
