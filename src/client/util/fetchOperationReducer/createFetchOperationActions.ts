type FetchOperationActionBegin<OperationName extends string> = {
  type: "[fetch-operation] Begin";
  payload: {};
  operationName: OperationName;
};

type FetchOperationActionSuccess<OperationName extends string, Payload> = {
  type: "[fetch-operation] Success";
  payload: Payload;
  operationName: OperationName;
};

type FetchOperationActionFailed<OperationName extends string> = {
  type: "[fetch-operation] Failed";
  payload: Error;
  operationName: OperationName;
};

export type FetchOperationAction<OperationName extends string, Payload> =
  | FetchOperationActionBegin<OperationName>
  | FetchOperationActionSuccess<OperationName, Payload>
  | FetchOperationActionFailed<OperationName>;

export function createFetchOperationActions<
  OperationName extends string,
  Payload
>(operationName: OperationName) {
  return {
    fetchBegin(): FetchOperationAction<OperationName, Payload> {
      return {
        type: "[fetch-operation] Begin",
        operationName,
        payload: {},
      };
    },

    fetchSuccess(
      payload: Payload,
    ): FetchOperationAction<OperationName, Payload> {
      return {
        type: "[fetch-operation] Success",
        operationName,
        payload,
      };
    },

    fetchFailed(error: Error): FetchOperationAction<OperationName, Payload> {
      return {
        type: "[fetch-operation] Failed",
        operationName,
        payload: error,
      };
    },
  };
}
