import { Observable } from "rxjs";
import { filter, tap } from "rxjs/operators";
import { StorageAction, StorageActionType } from "../../common.old";
import { FetchResourceAction } from "./FetchResourceAction";

const isResourceFetchingByKey = new Set<string>();

/**
 * Mutex for resource fetches. Marks the resource as being in a fetching state
 * if it isn't already. If the resource is already being fetched then discard
 * the action.
 */
export const lockResourceFetch = () => (
  source: Observable<FetchResourceAction>,
) =>
  source.pipe(
    filter(action => !isResourceFetchingByKey.has(action.payload.key)),
    tap(action => {
      isResourceFetchingByKey.add(action.payload.key);
    }),
  );

/**
 * Unlocks the mutex for the resource by the fetch result action.
 */
export const unlockResourceFetch = () => (source: Observable<StorageAction>) =>
  source.pipe(
    tap(action => {
      if (!isFetchResourceResponseAction(action)) return;

      isResourceFetchingByKey.delete(action.payload.key);
    }),
  );

function isFetchResourceResponseAction(
  action: StorageAction,
): action is FetchResourceResponseAction {
  return (
    action.type === StorageActionType.FetchResourceSuccess ||
    action.type === StorageActionType.FetchResourceFailure
  );
}

type FetchResourceResponseAction = Extract<
  StorageAction,
  {
    type:
      | StorageActionType.FetchResourceSuccess
      | StorageActionType.FetchResourceFailure;
  }
>;
