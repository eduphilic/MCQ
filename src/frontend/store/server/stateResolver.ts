import { setItem } from "localforage";
import { PartialObserver } from "rxjs";
import {
  MessagePortStorageAction,
  storageActions,
  StorageActionType,
} from "../common";
import { dispatch } from "./dispatch";

/**
 * Resolves state update and retrieval requests.
 */
export const stateResolver: PartialObserver<MessagePortStorageAction> = {
  next: handleAction,
};

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
