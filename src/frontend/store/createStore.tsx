import React, {
  ComponentType,
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

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
export async function createStore<State>(): Promise<Store<State>> {
  // TODO: Retrieve from backend/storage or use initial value.
  const initialState: State = {} as any;
  const Context = createContext<StoreContextValue<State>>(null as any);

  return { Context, Provider };

  function Provider(props: { children?: ReactNode }) {
    const [state, setLocalState] = useState(initialState);

    // TODO: Dispatch an update event to web worker.
    const setState = useCallback((nextState: State) => {
      setLocalState(nextState);
    }, []);

    // TODO: Subscribe to updates from web worker.

    const value: StoreContextValue<State> = useMemo(() => {
      return {
        state,
        setState,
      };
    }, [setState, state]);

    return <Context.Provider value={value}>{props.children}</Context.Provider>;
  }
}
