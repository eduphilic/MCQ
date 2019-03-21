import { createServer, IncomingMessage, ServerResponse } from "http";
import next from "next";
import path from "path";
import { decorateHandlerWithMiddleware } from "./decorateHandlerWithMiddleware";
import { NodeHttpRequestHandler } from "./NodeHttpRequestHandler";

export function startDevelopmentServer(apiHandler: NodeHttpRequestHandler) {
  const nextJsApp = next({
    dev: true,
    // Path relative to the "dist" directory:
    dir: path.resolve(__dirname, "../src/frontend"),
  });
  const nextJsHandler = decorateHandlerWithMiddleware(
    nextJsApp.getRequestHandler(),
    apiHandler,
  );

  const nextJsPreparationStatus = nextJsApp.prepare();

  createServer(handleRequest).listen(3000, handleError);

  function handleRequest(req: IncomingMessage, res: ServerResponse) {
    nextJsPreparationStatus
      .then(() => {
        nextJsHandler(req, res);
      })
      .catch(handleError);
  }
}

function handleError(err: unknown) {
  if (err) {
    /* tslint:disable-next-line:no-console */
    console.error(err);
    process.exit(1);
  }
}
