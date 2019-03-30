type SharedWorkerModule = typeof import("../../store.shared-worker.ts")["default"];

let sharedWorker: SharedWorker.SharedWorker | null = null;

// Don't initialize web worker in Node.js or testing environments.
if (process.browser) {
  // tslint:disable-next-line:no-var-requires
  const sharedWorkerModule = require("../../store.shared-worker.ts") as SharedWorkerModule & {
    default: SharedWorkerModule;
  };

  sharedWorker = new (sharedWorkerModule.default || sharedWorkerModule)(
    "Store Worker",
  );
}

/**
 * Reference to storage web worker.
 */
export { sharedWorker };
