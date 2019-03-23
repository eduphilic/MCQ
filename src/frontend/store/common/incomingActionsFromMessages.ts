import { EMPTY, Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { StorageAction, StorageActionType } from "./storageActions";

/**
 * Returns an observable which returns received actions along with their source
 * message ports.
 *
 * @param source Source observable which emits messages and their source ports.
 */
export function incomingActionsFromMessages(source: Observable<MessageEvent>) {
  return source.pipe(
    switchMap(event => {
      const action = event.data as unknown;

      // Ensure the message contents contains a recognized action.
      if (!isFluxStandardAction(action)) {
        // tslint:disable-next-line:no-console
        console.error("Unrecognized message event:", event.data);
        return EMPTY;
      }

      return of(action);
    }),
  );
}

/**
 * Whether or not the provided message's data is a recognized `StorageAction`.
 *
 * @param obj Message contents.
 */
function isFluxStandardAction(obj: unknown): obj is StorageAction {
  if (typeof obj !== "object" || obj === null || !("type" in obj)) return false;

  const objWithType = obj as { type: unknown };

  return (
    typeof objWithType.type === "string" &&
    Object.values(StorageActionType).includes(objWithType.type)
  );
}
