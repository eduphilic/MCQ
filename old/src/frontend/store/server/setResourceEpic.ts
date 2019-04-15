import { EMPTY, merge, Observable, of, Subject } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { StoreAction, StoreActionSetState, StoreActionType } from "../common";
import { createResourceUpdater } from "./createResourceUpdater";
import { filterAction } from "./filterAction";

const resourceUpdaters = new Map<string, Subject<StoreActionSetState>>();

/**
 * Epic which handles state updates. It emits update messages to all subscribed
 * browser tabs and handles web request debouncing.
 *
 * @param actions$ Incoming store update actions.
 */
export function setResourceEpic(actions$: Observable<StoreAction>) {
  return actions$.pipe(
    // Respond only to state update actions.
    filterAction(StoreActionType.SetState),
    // Create a resource updater for the incoming resource type if it doesn't
    // already exist. This is to allow the use of a single observable per
    // resource type so each observable instance can handle its network
    // debouncing.
    mergeMap(action => {
      if (!resourceUpdaters.has(action.payload.resourceName)) {
        const { subject, observable } = createResourceUpdater();
        resourceUpdaters.set(action.payload.resourceName, subject);
        return merge(of(action), observable);
      }

      return of(action);
    }),
    // Dispatch the action to the appropriate resource updater.
    mergeMap(action => {
      // `SetState` actions are sent to the updater and swallowed. The updater
      // will handle emitting a success or error action response.
      if (action.type === StoreActionType.SetState) {
        setTimeout(() => {
          resourceUpdaters.get(action.payload.resourceName)!.next(action);
        });
        return EMPTY;
      }

      // Return the responses from the updaters.
      return of(action);
    }),
  );
}
