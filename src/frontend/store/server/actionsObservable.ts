import { Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { portActions, StoreAction } from "../common";
import { ports$ } from "./portsObservable";

export const actionsSubject = new Subject<StoreAction>();
ports$
  .pipe(
    portActions(),
    tap(action => {
      /* tslint:disable-next-line:no-console */
      console.log("Incoming action:", { action });
    }),
  )
  .subscribe(actionsSubject);

/**
 * Returns an observable which returns received actions.
 *
 * @param source Source observable which emits web socket messages.
 */
export const actions$ = actionsSubject.asObservable();
