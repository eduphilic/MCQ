import * as functions from "firebase-functions";
import { decorateHandlerWithMiddleware } from "./decorateHandlerWithMiddleware";
import { NodeHttpRequestHandler } from "./NodeHttpRequestHandler";

/**
 * Create the `module.exports` object containing the Firebase function handlers
 * used in production.
 *
 * @param apiHandler The handler for api calls.
 */
export function getFirebaseFunctionExports(apiHandler: NodeHttpRequestHandler) {
  const firebaseFunctionExports: Record<
    string,
    ReturnType<typeof functions.https.onRequest>
  > = {};

  firebaseFunctionExports.api = functions.https.onRequest(apiHandler);

  // Next.js emits a file containing the mapping of page routes to page
  // Javascript bundles. The Webpack build process injects the contents here:
  const pages = __NEXT_JS_PAGE_EXPORTS__!;

  pages.forEach(([nextPageExport, nextPageImport]) => {
    firebaseFunctionExports[nextPageExport] = functions.https.onRequest(
      decorateHandlerWithMiddleware(nextPageImport),
    );
  });

  return firebaseFunctionExports;
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
