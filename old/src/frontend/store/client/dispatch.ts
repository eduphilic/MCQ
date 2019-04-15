import { StoreAction } from "../common";
import { sharedWorker } from "./sharedWorker";

/**
 * Dispatches the provided `StoreAction` to the store web worker.
 *
 * @param action Store action.
 */
export function dispatch(action: StoreAction) {
  if (!sharedWorker) {
    throw new Error("Store web worker not initialized.");
  }

  sharedWorker.port.postMessage(action);
}
