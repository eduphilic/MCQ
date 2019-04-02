import { Subject } from "rxjs";
import { portActions, StoreAction } from "../common";
import { ports$ } from "./portsObservable";

export const actionsSubject = new Subject<StoreAction>();
ports$.pipe(portActions()).subscribe(actionsSubject);

/**
 * Returns an observable which returns received actions.
 *
 * @param source Source observable which emits web socket messages.
 */
export const actions$ = actionsSubject.asObservable();
