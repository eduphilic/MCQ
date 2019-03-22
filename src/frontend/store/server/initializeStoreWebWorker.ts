import { setItem } from "localforage";
import {
  MessagePortStorageAction,
  storageActions,
  StorageActionType,
} from "../common";
import { dispatch } from "./dispatch";
import { incomingActions$ } from "./incomingActions";

/**
 * Initializes the web worker's action handler.
 */
export function initializeStoreWebWorker() {
  /* tslint:disable-next-line:no-console */
  console.log("Initializing storage web worker...");

  incomingActions$.subscribe({
    next: handleAction,
    error: error => {
      /* tslint:disable-next-line:no-console */
      console.error("initializeStorageWebWorker(): error", error);
    },
    complete: () => {
      /* tslint:disable-next-line:no-console */
      console.log("initializeStorageWebWorker(): complete");
    },
  });
}

function handleAction({ action }: MessagePortStorageAction) {
  switch (action.type) {
    // Store value to one of the storage backends.
    case StorageActionType.SetItem: {
      setItem(action.payload.key, action.payload.value).then(
        updatedValue =>
          dispatch(
            storageActions.setItemSuccess(action.payload.key, updatedValue),
          ),
        error =>
          dispatch(
            storageActions.setItemFailure(action.payload.key, error.toString()),
          ),
      );
      break;
    }
  }
}
