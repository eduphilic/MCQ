declare module "*.worker.ts" {
  const WorkerFromLoader: {
    new (name?: string): Worker;
  };

  export default WorkerFromLoader;
}

declare module "*.shared-worker.ts" {
  const SharedWorkerFromLoader: {
    new (name?: string): SharedWorker.SharedWorker;
  };

  export type SharedWorkerFromLoaderType = typeof SharedWorkerFromLoader;

  export default SharedWorkerFromLoader;
}
