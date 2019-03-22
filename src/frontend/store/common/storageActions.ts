/**
 * Action types of messages sent and received between client pages and the web
 * worker.
 */
export enum StorageActionType {
  ConsoleLog = "[storage] Console Log",
  ConsoleError = "[storage] Console Error",
  SetItem = "[storage] Set Item",
  SetItemSuccess = "[storage] Set Item Success",
  SetItemFailure = "[storage] Set Item Failure",
}

/**
 * Actions received and sent between client pages and the web worker.
 */
export type StorageAction =
  | {
      type: StorageActionType.ConsoleLog | StorageActionType.ConsoleError;
      payload: {
        message: string;
      };
    }
  | {
      type: StorageActionType.SetItem | StorageActionType.SetItemSuccess;
      payload: {
        key: string;
        value: unknown;
      };
    }
  | {
      type: StorageActionType.SetItemFailure;
      payload: {
        key: string;
        error: string;
      };
    };

export const storageActions = {
  /**
   * Request that a page log the specified message using `console.log`.
   */
  consoleLog: (message: string): StorageAction => ({
    type: StorageActionType.ConsoleLog,
    payload: { message },
  }),

  /**
   * Request that a page log the specified message using `console.error`.
   */
  consoleError: (message: string): StorageAction => ({
    type: StorageActionType.ConsoleError,
    payload: { message },
  }),

  /**
   * Sent from the page to the web worker. Update a storage value using the
   * provided `key` and `value`.
   */
  setItem: (key: string, value: unknown): StorageAction => ({
    type: StorageActionType.SetItem,
    payload: { key, value },
  }),

  /**
   * Sent from the web worker to the page after a value is updated. Updated
   * `value` and its corresponding `key`.
   */
  setItemSuccess: (key: string, value: unknown): StorageAction => ({
    type: StorageActionType.SetItemSuccess,
    payload: { key, value },
  }),

  /**
   * Sent from the web worker when a value update fails.
   */
  setItemFailure: (key: string, error: string): StorageAction => ({
    type: StorageActionType.SetItemFailure,
    payload: { key, error },
  }),
};
