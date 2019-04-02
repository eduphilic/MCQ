import React, {
  ComponentType,
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { asapScheduler } from "rxjs";
import { subscribeOn } from "rxjs/operators";
import { actions$, dispatch } from "./client";
import { storeActions, StoreActionType } from "./common";

type StoreConfig<State> = {
  resourceName: string | null;
  backendResourceName: string | null;
  defaultState: State | null;
};

type StoreContextValue<State> = {
  state: State;
  setState: (state: State) => void;
};

export type Store<State> = {
  Context: React.Context<StoreContextValue<State>>;
  Provider: ComponentType<{ children?: ReactNode }>;
};

/**
 * Creates a `Store` backed by memory, IndexDB, or IndexDB with backend
 * synchronization.
 */
export async function createStore<State>(
  config: StoreConfig<State>,
): Promise<Store<State>> {
  const initialState: State = await getInitialState(
    config.resourceName,
    config.backendResourceName,
    config.defaultState,
  );

  const Context = createContext<StoreContextValue<State>>(null as any);
  return { Context, Provider };

  function Provider(props: { children?: ReactNode }) {
    const [state, setLocalState] = useState(initialState);

    // Update the state in the current browser tab and dispatch an event to the
    // web worker so that state is synced.
    const setState = useCallback((nextState: State) => {
      setLocalState(nextState);
      if (!config.resourceName) return;
      dispatch(
        storeActions.setState(
          config.resourceName,
          config.backendResourceName,
          nextState,
        ),
      );
    }, []);

    // Subscribe to state updates from web worker.
    useEffect(() => {
      const subscription = actions$.pipe(subscribeOn(asapScheduler)).subscribe({
        next: action => {
          if (
            action.type !== StoreActionType.GetStateSuccess ||
            action.payload.resourceName !== config.resourceName
          ) {
            return;
          }

          setLocalState(action.payload.data as State);
        },
      });

      return subscription.unsubscribe.bind(subscription);
    }, []);

    const value: StoreContextValue<State> = useMemo(() => {
      return {
        state,
        setState,
      };
    }, [setState, state]);

    return <Context.Provider value={value}>{props.children}</Context.Provider>;
  }
}

async function getInitialState<State>(
  resourceName: string | null,
  backendResourceName: string | null,
  defaultState: State | null,
) {
  if (!resourceName) {
    if (!defaultState) {
      throw new Error(
        "Either a resourceName or initialState must be provided.",
      );
    }

    return defaultState;
  }

  const initialState = new Promise<State>((resolve, reject) => {
    const subscription = actions$.pipe(subscribeOn(asapScheduler)).subscribe({
      next: action => {
        if (
          action.type === StoreActionType.GetStateSuccess &&
          action.payload.resourceName === resourceName
        ) {
          subscription.unsubscribe();
          resolve(action.payload.data as State);
          return;
        }

        if (
          action.type === StoreActionType.GetStateFailure &&
          action.payload.resourceName === resourceName
        ) {
          subscription.unsubscribe();

          if (defaultState) {
            resolve(defaultState);
            return;
          }

          reject(action.payload.error.payload.message);
          return;
        }
      },
    });
  });

  dispatch(storeActions.getState(resourceName, backendResourceName));

  return initialState;
}
