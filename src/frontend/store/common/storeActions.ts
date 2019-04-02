import { ResourceLoadError } from "./resourceLoadError";

export enum StoreActionType {
  GetState = "[store] Get State",
  GetStateSuccess = "[store] Get State Success",
  GetStateFailure = "[store] Get State Failure",
  SetState = "[store] Set State",
}

export type StoreAction =
  | StoreActionGetState
  | StoreActionGetStateSuccess
  | StoreActionGetStateFailure
  | StoreActionSetState;

/**
 * Sent from the client to the webworker. It requests the state for the
 * specified response.
 */
export type StoreActionGetState = {
  type: StoreActionType.GetState;
  payload: {
    resourceName: string;
    backendResourceName: string | null;
    /** Set to true when an update request returns an error due to conflict. */
    forceRefetch?: boolean;
  };
};

/**
 * Sent from the web worker to the client when a resource could be loaded from
 * either cache or the backend.
 */
export type StoreActionGetStateSuccess = {
  type: StoreActionType.GetStateSuccess;
  payload: { resourceName: string; data: unknown };
};

/**
 * Sent from the web worker to the client when a resource state load failed.
 */
export type StoreActionGetStateFailure = {
  type: StoreActionType.GetStateFailure;
  payload: { resourceName: string; error: ResourceLoadError };
};

/**
 * Sent from the client to the web worker to set the state of a resource.
 */
export type StoreActionSetState = {
  type: StoreActionType.SetState;
  payload: {
    resourceName: string;
    backendResourceName: string | null;
    data: unknown;
  };
};

export const storeActions = {
  getState(
    resourceName: string,
    backendResourceName: string | null,
    forceRefetch?: boolean,
  ): StoreActionGetState {
    return {
      type: StoreActionType.GetState,
      payload: { resourceName, backendResourceName, forceRefetch },
    };
  },

  getStateSuccess(
    resourceName: string,
    data: unknown,
  ): StoreActionGetStateSuccess {
    return {
      type: StoreActionType.GetStateSuccess,
      payload: { resourceName, data },
    };
  },

  getStateFailure(
    resourceName: string,
    error: ResourceLoadError,
  ): StoreActionGetStateFailure {
    return {
      type: StoreActionType.GetStateFailure,
      payload: {
        resourceName,
        error,
      },
    };
  },

  setState(
    resourceName: string,
    backendResourceName: string | null,
    data: unknown,
  ): StoreActionSetState {
    return {
      type: StoreActionType.SetState,
      payload: { resourceName, backendResourceName, data },
    };
  },
};
