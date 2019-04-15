import { Observable } from "rxjs";
import { filter, tap } from "rxjs/operators";
import { StoreAction, StoreActionGetState, StoreActionType } from "../common";

const isResourceFetchingByKey = new Set<string>();

/**
 * Mutex for resource fetches. Marks the resource as being in a fetching state
 * if it isn't already. If the resource is already being fetched then discard
 * the action.
 */
export function lockResourceFetch() {
  return function(source: Observable<StoreActionGetState>) {
    return source.pipe(
      filter(
        action => !isResourceFetchingByKey.has(action.payload.resourceName),
      ),
      tap(action => {
        isResourceFetchingByKey.add(action.payload.resourceName);
      }),
    );
  };
}

/**
 * Unlocks the mutex for the resource by the fetch result action.
 */
export function unlockResourceFetch() {
  return function(source: Observable<StoreAction>) {
    return source.pipe(
      tap(action => {
        if (!isFetchResourceResponseAction(action)) return;

        isResourceFetchingByKey.delete(action.payload.resourceName);
      }),
    );
  };
}

function isFetchResourceResponseAction(
  action: StoreAction,
): action is FetchResourceResponseAction {
  return (
    action.type === StoreActionType.GetStateSuccess ||
    action.type === StoreActionType.GetStateFailure
  );
}

type FetchResourceResponseAction = Extract<
  StoreAction,
  {
    type: "[store] Get State Success";
  }
>;
