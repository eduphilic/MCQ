import { StorageAction, StorageActionType } from "../common";
import { incomingActions$ } from "./incomingActions";

/**
 * Initialized the handler for incoming messages from the storage web worker.
 */
export function initializeStore() {
  incomingActions$.subscribe({
    next: handleAction,
  });
}

function handleAction(action: StorageAction) {
  switch (action.type) {
    case StorageActionType.ConsoleLog: {
      /* tslint:disable-next-line:no-console */
      console.log(action.payload.message);
      break;
    }

    case StorageActionType.ConsoleError: {
      /* tslint:disable-next-line:no-console */
      console.error(action.payload.message);
      break;
    }
  }
}
