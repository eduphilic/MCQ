import { StorageAction } from "./storageActions";

/**
 * A `StorageAction` with its source port.
 */
export type MessagePortStorageAction = {
  port: MessagePort;
  action: StorageAction;
};
