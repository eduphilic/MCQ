let sharedWorker: SharedWorker.SharedWorker | null = null;

// Don't initialize web worker in Node.js or testing environments.
if (process.browser) {
  // tslint:disable-next-line:no-var-requires
  sharedWorker = new (require("../../store.shared-worker.ts") as typeof import("../../store.shared-worker.ts")).default(
    "Storage Worker",
  );
}

/**
 * Reference to storage web worker.
 */
export { sharedWorker };
