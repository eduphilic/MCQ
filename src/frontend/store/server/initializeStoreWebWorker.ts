import { Observable, Subject } from "rxjs";
import { StoreAction } from "../common";
import { actions$ } from "./actionsObservable";
import { dispatch } from "./dispatch";
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
    next: dispatch,
    error: error => {
      /* tslint:disable-next-line:no-console */
      console.error({ "Epic error": error });
    },
  });

  actions$.subscribe(subject);
}
