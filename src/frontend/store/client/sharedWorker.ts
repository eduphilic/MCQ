import { SharedWorkerFromLoaderType } from "*.shared-worker.ts";

let StoreSharedWorker: SharedWorkerFromLoaderType | null = null;

if (process.browser) {
  // tslint:disable-next-line:no-var-requires
  StoreSharedWorker = require("../../store.shared-worker.ts");
}

/**
 * Reference to storage web worker.
 */
export const sharedWorker = (StoreSharedWorker
  ? new StoreSharedWorker("Storage Worker")
  : null)!;
