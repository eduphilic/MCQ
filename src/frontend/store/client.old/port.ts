import { sharedWorker } from "./sharedWorker";

/**
 * Web worker port.
 */
export const port = sharedWorker ? sharedWorker.port : null;
