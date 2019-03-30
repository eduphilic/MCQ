import { Observable, of } from "rxjs";
import { mergeMap, tap } from "rxjs/operators";
import { StoreAction, storeActions, StoreActionType } from "../common";
import { filterAction } from "./filterAction";
import { loadFromBackend } from "./loadFromBackend";
import { loadFromCache } from "./loadFromCache";
import { lockResourceFetch } from "./resourceFetchLock";

/**
 * Processes requests to load or retrieve resources.
 *
 * @param actions$ Observable of incoming actions to the web worker.
 */
export function getResourceEpic(actions$: Observable<StoreAction>) {
  return actions$.pipe(
    filterAction(StoreActionType.GetState),
    lockResourceFetch(),
    loadFromCache(),
    loadFromBackend(),
    tap(resourceLoadResult => {
      /* tslint:disable-next-line:no-console */
      console.log({ resourceLoadResult });
    }),
    mergeMap(resourceLoadResult => {
      if (resourceLoadResult.resource) {
        return of(
          storeActions.getStateSuccess(
            resourceLoadResult.action.payload.resourceName,
            resourceLoadResult.resource.data,
          ),
        );
      }

      return of(
        storeActions.getStateFailure(
          resourceLoadResult.action.payload.resourceName,
          resourceLoadResult.error,
        ),
      );
    }),
  );
}
