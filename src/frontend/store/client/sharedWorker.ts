/**
 * Reference to storage web worker.
 */
export const sharedWorker = new SharedWorker(
  "./js/webworker.js",
  "Storage Worker",
);
