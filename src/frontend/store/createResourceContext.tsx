import produce, { Draft } from "immer";
import React, {
  createContext,
  ReactNode,
  Reducer,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { incomingActions$, port } from "./client";
import { StorageAction, storageActions, StorageActionType } from "./common";

type ResourceValue<T> = {
  /**
   * Whether the resource is currently being fetched.
   */
  fetching: boolean;

  /**
   * Error message returned from resource fetch failure.
   */
  error: string | null;

  /**
   * Fetched resource.
   */
  data: T | null;
};

type CreateResourceContextConfig = {
  /**
   * Cache key where resource should be stored and retrieved.
   */
  key: string;

  /**
   * Address of resource.
   */
  url: string;

  /**
   * Credential token to access resource from backend.
   */
  credential?: string;
};

type ResourceProviderProps = {
  children?: ReactNode;
};

const DEFAULT_RESOURCE_EXPIRATION = 1000 * 60 * 60 * 24; // 24 hours.

/**
 * Creates a React `Context` which automatically retrieves the specified
 * resource from the backend server. The retrieved resource is cached and reused
 * between browser windows. It is cached for `DEFAULT_RESOURCE_EXPIRATION` time.
 */
export function createResourceContext<T>(config: CreateResourceContextConfig) {
  const defaultValue: ResourceValue<T> = {
    fetching: true,
    error: null,
    data: null,
  };

  const ResourceContext = createContext(defaultValue);
  return { ResourceProvider, useResource };

  function ResourceProvider(props: ResourceProviderProps) {
    const state = useResourceState<T>(config.key, defaultValue);
    useResourceFetchOnMount(config);

    return (
      <ResourceContext.Provider value={state}>
        {props.children}
      </ResourceContext.Provider>
    );
  }

  function useResource() {
    return useContext(ResourceContext);
  }
}

function useResourceState<T>(key: string, initialState: ResourceValue<T>) {
  const [state, unfilteredDispatch] = useReducer<
    Reducer<ResourceValue<T>, StorageAction>
  >(reducer, initialState);

  const dispatch = useCallback(
    (action: StorageAction) => {
      if (!isFetchResourceResponseAction(action)) return;
      if (action.payload.key !== key) return;

      unfilteredDispatch(action);
    },
    [key],
  );

  useEffect(() => {
    const subscription = incomingActions$.subscribe({ next: dispatch });
    return subscription.unsubscribe.bind(subscription);
  }, [dispatch]);

  return state;
}

function useResourceFetchOnMount(config: CreateResourceContextConfig) {
  useEffect(() => {
    port.postMessage(
      storageActions.fetchResource(
        config.key,
        config.url,
        DEFAULT_RESOURCE_EXPIRATION,
        config.credential,
      ),
    );
  }, [config.credential, config.key, config.url]);
}

function reducer<T>(state: ResourceValue<T>, action: StorageAction) {
  return produce(state, draft => {
    switch (action.type) {
      case StorageActionType.FetchResourceSuccess: {
        draft.fetching = false;
        draft.data = action.payload.value as Draft<T>;
        draft.error = null;
        break;
      }

      case StorageActionType.FetchResourceFailure: {
        draft.fetching = false;
        draft.data = null;
        draft.error = action.payload.error;
        break;
      }
    }
  });
}

function isFetchResourceResponseAction(
  action: StorageAction,
): action is Extract<
  StorageAction,
  {
    type:
      | StorageActionType.FetchResourceSuccess
      | StorageActionType.FetchResourceFailure;
  }
> {
  return (
    action.type === StorageActionType.FetchResourceSuccess ||
    action.type === StorageActionType.FetchResourceFailure
  );
}
