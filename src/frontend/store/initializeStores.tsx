import React, {
  cloneElement,
  Context,
  ContextType,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { SESSION_STATE_KEY, SessionState } from "./common";
import { createStore, Store } from "./createStore";

type SessionStoreState = SessionState;

const sessionStore = createStore<SessionStoreState>({
  resourceName: SESSION_STATE_KEY,
  backendResourceName: null,
  defaultState: { apiKey: null },
});

/**
 * Initializes each of the provided stores by retrieving their initial states
 * from their cache or using their initial values. It makes them available
 * through the returned `useStore` hook.
 *
 * @param storesConfig
 * Object which maps store names to their store config objects (returned from
 * the `createStore` factory).
 */
export function initializeStores<
  StoresConfig extends { [P: string]: Promise<Store<any>> }
>(storesConfig: StoresConfig) {
  type Stores = {
    [P in keyof StoresConfig]: StoresConfig[P] extends Promise<Store<infer U>>
      ? Store<U>
      : never
  } & { session: Store<SessionStoreState> };

  const StoresContext = createContext<Stores>(null as any);
  const initializedStores = {} as Stores;

  // Create a flag that sets to true once all stores have been initialized by
  // subscribing to their promises.
  let initialized = false;
  const initializationPromises: Promise<void>[] = [];
  for (const key in storesConfig) {
    if (!storesConfig.hasOwnProperty(key)) continue;
    initializationPromises.push(
      storesConfig[key].then(storeValue => {
        initializedStores[key] = storeValue as any;
      }),
    );
  }
  initializationPromises.push(
    sessionStore.then(storeValue => {
      initializedStores.session = storeValue;
    }),
  );
  const initialization = Promise.all(initializationPromises).then(() => {
    initialized = true;
  });

  return { StoresProvider, useStore, useRootStore };

  function StoresProvider(props: { children?: ReactNode }) {
    const [loaded, setLoaded] = useState(initialized);

    useEffect(() => {
      if (loaded) return;

      initialization
        .then(() => {
          setLoaded(true);
        })
        .catch(error => {
          throw error;
        });
    }, [loaded]);

    const providers = useMemo(
      () =>
        loaded
          ? Object.values(initializedStores)
              .map(value => <value.Provider />)
              .concat(<StoresContext.Provider value={initializedStores} />)
          : [],
      [loaded],
    );

    if (!loaded) return <p>Loading...</p>;

    return (
      <ComposedContext providers={providers}>{props.children}</ComposedContext>
    );
  }

  /**
   * Use the specified store.
   *
   * @param storeName Store name.
   */
  function useStore<StoreName extends keyof Stores>(storeName: StoreName) {
    type ContextValue = Stores[StoreName]["Context"] extends Context<infer U>
      ? U
      : never;
    const store = useContext(StoresContext)[storeName];

    // TODO: Fix type error.
    return useContext<ContextValue>((store.Context as unknown) as Context<
      ContextValue
    >);
  }

  function useRootStore() {
    const storesMap = {} as {
      [P in keyof Stores]: ContextType<Stores[P]["Context"]>
    };

    for (const key in initializedStores) {
      if (!initializedStores.hasOwnProperty(key)) continue;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      storesMap[key] = useStore(key) as any;
    }

    return storesMap;
  }
}

type ComposedContextProps = {
  children?: ReactNode;
  providers: ReactElement<any>[];
};

function ComposedContext(props: ComposedContextProps) {
  return (
    <>
      {props.providers.reduceRight(
        (children, parent) => cloneElement(parent, { children }),
        props.children,
      )}
    </>
  );
}
