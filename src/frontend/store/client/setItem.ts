import { storageActions, StorageActionType } from "../common";
import { incomingActions$ } from "./incomingActions";
import { port } from "./port";

/**
 * Storages the provided `value` under the specified `key` and returns the
 * updated value.
 *
 * @param key Storage key to persist value to.
 * @param value Value to persist.
 */
export async function setItem<Value>(
  key: string,
  value: Value,
): Promise<Value> {
  return new Promise<Value>((resolve, reject) => {
    port.postMessage(storageActions.setItem(key, value));

    const subscription = incomingActions$.subscribe({
      next: ({ action }) => {
        if (
          action.type === StorageActionType.SetItemFailure &&
          action.payload.key === key
        ) {
          subscription.unsubscribe();
          reject(action.payload.error);
          return;
        }

        if (
          action.type === StorageActionType.SetItemSuccess &&
          action.payload.key === key
        ) {
          subscription.unsubscribe();
          resolve(action.payload.value as Value);
          return;
        }
      },
    });
  });
}
