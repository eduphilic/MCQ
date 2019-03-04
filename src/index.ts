/* tslint:disable:no-var-requires */

// Suppress TypeScript error:
// Cannot compile namespaces when the '--isolatedModules' flag is provided.ts(1208)
/* tslint:disable:no-empty */
// @ts-ignore
if (true) {
}
/* tslint:enable:no-empty */

const { handleApiRequest }: typeof import("./server/main") = require("./api");

if (process.env.NODE_ENV === "production") {
  const functions: typeof import("firebase-functions") = require("firebase-functions");
  exports.api = functions.https.onRequest(handleApiRequest);

  const pages = __NEXT_JS_PAGE_EXPORTS__;
  pages!.forEach(([nextPageExport, nextPageImport]) => {
    module.exports[nextPageExport] = functions.https.onRequest(nextPageImport);
  });
}

if (process.env.NODE_ENV === "development") {
  const path: typeof import("path") = require("path");
  const { createServer }: typeof import("http") = require("http");
  const { parse }: typeof import("url") = require("url");
  const next: typeof import("next") = require("next");

  const app = next({
    dev: true,
    dir: path.resolve(__dirname, "../src/client"),
  });
  const handle = app.getRequestHandler();

  // tslint:disable-next-line:no-floating-promises
  app.prepare().then(() =>
    createServer((req, res) => {
      const parsedUrl = parse(req.url!, true);
      const { pathname } = parsedUrl;

      if (pathname!.startsWith("/api")) {
        handleApiRequest(req, res);
        return;
      }

      // tslint:disable-next-line:no-floating-promises
      handle(req, res, parsedUrl);
    }).listen(3000, (err?: Error) => {
      if (err) throw err;
      /* tslint:disable-next-line:no-console */
      console.log("> Ready on http://localhost:3000");
    }),
  );
}

declare var __NEXT_JS_PAGE_EXPORTS__: [string, any][] | undefined;
