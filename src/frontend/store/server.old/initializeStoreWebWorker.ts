import { incomingActions$ } from "./incomingActions";
import { resourceResolver } from "./resourceResolver";
import { stateResolver } from "./stateResolver";

/**
 * Initializes the web worker's action resolvers.
 */
export function initializeStoreWebWorker() {
  /* tslint:disable-next-line:no-console */
  console.log("Initializing storage web worker...");

  incomingActions$.subscribe(stateResolver);
  incomingActions$.subscribe(resourceResolver);
}
