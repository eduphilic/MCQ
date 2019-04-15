import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { StoreAction } from "../common";

/**
 * Filters out store actions which are not the provided type.
 *
 * @param actionType Store action type.
 */
export function filterAction<ActionType extends StoreAction["type"]>(
  actionType: ActionType,
) {
  return (source: Observable<StoreAction>) =>
    source.pipe(
      filter(
        (action): action is Extract<StoreAction, { type: ActionType }> =>
          action.type === actionType,
      ),
    );
}
