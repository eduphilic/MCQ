import { portActions } from "../common";
import { ports$ } from "./portsObservable";

/**
 * Returns an observable of `StoreAction` returned from the web worker.
 */
export const actions$ = ports$.pipe(portActions());
