import { EMPTY, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { StoreAction, StoreActionType } from "../common";
import { messages$ } from "./messagesObservable";

/**
 * Returns an observable which returns received actions.
 *
 * @param source Source observable which emits web socket messages.
 */
export const actions$ = messages$.pipe(
  switchMap(event => {
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
