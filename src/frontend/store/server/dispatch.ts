import { asapScheduler } from "rxjs";
import { subscribeOn } from "rxjs/operators";
import { StorageAction } from "../common";
import { ports$ } from "./ports";

/**
 * Dispatches the supplied action to pages connected to the web worker.
 *
 * @param action Action to dispatch.
 */
export async function dispatch(action: StorageAction) {
  return new Promise<void>(resolve => {
    const subscription = ports$.pipe(subscribeOn(asapScheduler)).subscribe({
      next: ports => {
        subscription.unsubscribe();
        ports.forEach(port => {
          port.postMessage(action);
        });
        resolve();
      },
    });
  });
}
