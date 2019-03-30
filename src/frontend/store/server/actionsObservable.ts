import { portActions } from "../common";
import { ports$ } from "./portsObservable";

/**
 * Returns an observable which returns received actions.
 *
 * @param source Source observable which emits web socket messages.
 */
export const actions$ = ports$.pipe(portActions());
