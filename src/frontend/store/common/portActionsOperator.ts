import { EMPTY, Observable, of } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { portMessages } from "./portMessagesOperator";
import { StoreAction, StoreActionType } from "./storeActions";

export function portActions() {
  return function(source$: Observable<MessagePort>) {
    return source$.pipe(
      portMessages(),
      mergeMap(event => {
        const action = event.data as unknown;

        // Ensure the message contains a recognized action.
        if (!isFluxStandardAction(action)) {
          // tslint:disable-next-line:no-console
          console.error("Unrecognized message event:", event.data);
          return EMPTY;
        }

        return of(action);
      }),
    );
  };
}

/**
 * Whether or not the provided message's data is a recognized `StoreAction`.
 *
 * @param obj Message contents.
 */
function isFluxStandardAction(obj: unknown): obj is StoreAction {
  if (typeof obj !== "object" || obj === null || !("type" in obj)) return false;

  const objWithType = obj as { type: unknown };

  return (
    typeof objWithType.type === "string" &&
    Object.values(StoreActionType).includes(objWithType.type)
  );
}
