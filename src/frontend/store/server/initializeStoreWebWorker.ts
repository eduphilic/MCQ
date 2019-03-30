import { Observable, Subject } from "rxjs";
import { StoreAction } from "../common";
import { actions$ } from "./actionsObservable";
import { getResourceEpic } from "./getResourceEpic";

/**
 * Connects the request processing epics to the incoming actions.
 */
export function initializeStoreWebWorker() {
  connectEpic(getResourceEpic);
}

function connectEpic(
  epic: (actions$: Observable<StoreAction>) => Observable<StoreAction>,
) {
  const subject = new Subject<StoreAction>();

  epic(subject).subscribe({
    next: action => {
      /* tslint:disable-next-line:no-console */
      console.log({ "epic subscription": action });
    },
    error: error => {
      /* tslint:disable-next-line:no-console */
      console.error({ "epic subscription": error });
    },
    complete: () => {
      /* tslint:disable-next-line:no-console */
      console.log({ "epic subscription": "Complete." });
    },
  });

  actions$.subscribe(subject);
}
