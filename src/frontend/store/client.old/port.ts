import { sharedWorker } from "../client/sharedWorker";

/**
 * Web worker port.
 */
export const port = sharedWorker ? sharedWorker.port : null;
