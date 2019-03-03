import produce, { Draft } from "immer";
import { StoreAction } from "../store";
import { createReducer } from "./createReducer";

enum FetchActionType {
  FetchBegin = "[fetch] Begin",
  FetchSuccess = "[fetch] Success",
  FetchError = "[fetch] Error",
}

export type FetchAction =
  | {
      type: FetchActionType.FetchBegin;
      operationName: string;
    }
  | {
      type: FetchActionType.FetchSuccess;
      operationName: string;
      payload: unknown;
    }
  | {
      type: FetchActionType.FetchError;
      operationName: string;
      payload: Error;
    };

type FetchState<Payload> = {
  fetching: boolean;
  fetched: boolean;
  error: Error | null;
  data: Payload | null;
};

export function createFetchReducer<Payload>(operationName: string) {
  const initialState: FetchState<Payload> = {
    fetching: false,
    fetched: false,
    error: null,
    data: null,
  };

  const reducer = createOperationFilterReducer(
    createReducer<FetchState<Payload>>(initialState, {
      [FetchActionType.FetchBegin]: state =>
        produce(state, draft => {
          draft.fetching = true;
        }),

      [FetchActionType.FetchSuccess]: (state, action) =>
        produce(state, draft => {
          draft.fetching = false;
          draft.fetched = true;
          draft.data = action.payload as Draft<Payload> | null;
          draft.error = null;
        }),

      [FetchActionType.FetchError]: (state, action) =>
        produce(state, draft => {
          draft.fetching = false;
          draft.fetched = false;
          draft.data = null;
          draft.error = action.payload;
        }),
    }),
  );

  const actions = {
    fetchBegin(): FetchAction {
      return { type: FetchActionType.FetchBegin, operationName };
    },

    fetchSuccess(data: Payload): FetchAction {
      return {
        type: FetchActionType.FetchSuccess,
        operationName,
        payload: data,
      };
    },

    fetchError(error: Error): FetchAction {
      return {
        type: FetchActionType.FetchError,
        operationName,
        payload: error,
      };
    },
  };

  type ReducerWithActions = typeof reducer & { actions: typeof actions };
  (reducer as ReducerWithActions).actions = actions;
  return reducer as ReducerWithActions;

  function createOperationFilterReducer(wrappedReducer: typeof reducer) {
    return function operationFilterReducer(
      state: FetchState<Payload> | undefined,
      action: StoreAction,
    ): FetchState<Payload> | undefined {
      if (!isFetchOperation(operationName, action)) {
        return state || initialState;
      }
      return wrappedReducer(state, action);
    };
  }
}

function isFetchOperation(
  operationName: string,
  action: unknown,
): action is FetchAction {
  if (typeof action !== "object" || action == null) return false;
  if (!("operationName" in action)) return false;

  const { operationName: actionOperationName } = action as {
    operationName: string;
  };

  return actionOperationName === operationName;
}
