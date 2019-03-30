import { of, PartialObserver, Subject } from "rxjs";
import { switchMap } from "rxjs/operators";
import { StorageAction, storageActions } from "../../common.old";
import { dispatch } from "../dispatch";
import { filterForFetchResourceAction } from "./filterForFetchResourceAction";
import { loadFromBackend } from "./loadFromBackend";
import { loadFromCache } from "./loadFromCache";
import { lockResourceFetch, unlockResourceFetch } from "./lock";

const subject = new Subject<StorageAction>();

/**
 * Resolves requests for remote resources. It returns the resource from cache if
 * available and not expired.
 */
export const resourceResolver: PartialObserver<StorageAction> = subject;

const actions$ = subject.pipe(
  filterForFetchResourceAction(),
  lockResourceFetch(),
  loadFromCache(),
  loadFromBackend(),
  switchMap(resourceLoadResult => {
    const key = resourceLoadResult.action.payload.key;
    const resourceState = resourceLoadResult.resourceState;
    const fetchError = resourceLoadResult.fetchError;

    if (resourceState) {
      return of(storageActions.fetchResourceSuccess(key, resourceState));
    }

    return of(storageActions.fetchResourceFailure(key, fetchError));
  }),
  unlockResourceFetch(),
);

actions$.subscribe({ next: dispatch });
