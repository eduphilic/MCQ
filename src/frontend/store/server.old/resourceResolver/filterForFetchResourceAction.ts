import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { StorageAction, StorageActionType } from "../../common.old";
import { FetchResourceAction } from "./FetchResourceAction";

/**
 * Filter out all actions that are not `FetchResource`.
 */
export const filterForFetchResourceAction = () => (
  source: Observable<StorageAction>,
) =>
  source.pipe(
    filter(
      (action): action is FetchResourceAction =>
        action.type === StorageActionType.FetchResource,
    ),
  );
