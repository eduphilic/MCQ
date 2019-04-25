declare module "firebase-tools" {
  interface FirebaseToolsClient {
    serve(options?: { port: number; cwd: string }): Promise<void>;
  }

  const client: FirebaseToolsClient;

  export default client;
}

declare module "firebase-tools/lib/serve/functions" {
  export const stop: () => Promise<void>;
}

declare module "firebase-tools/lib/serve/hosting" {
  export const stop: () => Promise<void>;
}
