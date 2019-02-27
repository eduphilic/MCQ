import produce, { Draft } from "immer";
import { FetchOperationAction } from "./createFetchOperationActions";

type State<Payload> = {
  fetching: boolean;
  fetched: boolean;
  error: Error | null;
  data: Payload | null;
};

export function createFetchOperationReducer<
  OperationName extends string,
  Payload
>(operationName: OperationName) {
  const initialState: State<Payload> = {
    fetching: false,
    fetched: false,
    error: null,
    data: null,
  };

  const reducer = produce((draft, action: unknown) => {
    if (!isFetchOperation<OperationName, Payload>(operationName, action)) {
      return;
    }

    switch (action.type) {
      case "[fetch-operation] Begin": {
        draft.fetching = true;
        break;
      }

      case "[fetch-operation] Success": {
        draft.fetching = false;
        draft.fetched = true;
        draft.data = action.payload as Draft<Payload>;
        break;
      }

      case "[fetch-operation] Failed": {
        draft.fetching = false;
        draft.data = null;
        draft.error = action.payload;
        break;
      }
    }
  }, initialState);

  return { reducer, initialState };
}

function isFetchOperation<OperationName extends string, Payload>(
  operationName: OperationName,
  action: unknown,
): action is FetchOperationAction<OperationName, Payload> {
  if (typeof action !== "object" || action == null) return false;
  if (!("operationName" in action)) return false;

  const { operationName: actionOperationName } = action as {
    operationName: string;
  };

  return actionOperationName === operationName;
}
