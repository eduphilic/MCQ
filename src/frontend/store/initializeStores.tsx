import React, {
  cloneElement,
  Context,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Store } from "./createStore";

type AnyStoresConfig = { [P: string]: Promise<any> };

type Stores<T extends AnyStoresConfig> = {
  [P in keyof T]: T[P] extends Promise<Store<infer U>> ? Store<U> : never
};

/**
 * Initializes each of the provided stores by retrieving their initial states
 * from their cache or using their initial values. It makes them available
 * through the returned `useStore` hook.
 *
 * @param storesConfig
 * Object which maps store names to their store config objects (returned from
 * the `createStore` factory).
 */
export function initializeStores<StoresConfig extends AnyStoresConfig>(
  storesConfig: StoresConfig,
) {
  const StoresContext = createContext<Stores<StoresConfig>>(null as any);
  const initializedStores: Partial<Stores<StoresConfig>> = {};

  let initialized = false;
  const initialization = Promise.all(
    storesConfigEntries().map(async ([storeName, storeValuePromise]) => {
      // tslint:disable-next-line:await-promise
      const storeValue = await storeValuePromise;
      initializedStores[storeName] = storeValue;
    }),
  ).then(() => {
    initialized = true;
  });

  return { StoresProvider, useStore };

  function StoresProvider(props: { children?: ReactNode }) {
    const [loading, setLoading] = useState(initialized);

    useEffect(() => {
      if (!loading) return;

      initialization
        .then(() => {
          setLoading(false);
        })
        .catch(error => {
          throw error;
        });
    }, [loading]);

    const providers = useMemo(
      () =>
        !loading
          ? Object.values(initializedStores as Stores<StoresConfig>)
              .map(value => <value.Provider />)
              .concat(
                <StoresContext.Provider
                  value={initializedStores as Stores<StoresConfig>}
                />,
              )
          : [],
      [loading],
    );

    if (loading) return <p>Loading...</p>;

    return (
      <ComposedContext providers={providers}>{props.children}</ComposedContext>
    );
  }

  /**
   * Use the specified store.
   *
   * @param storeName Store name.
   */
  function useStore<StoreName extends keyof StoresConfig>(
    storeName: StoreName,
  ) {
    type ContextValue = Stores<
      StoresConfig
    >[StoreName]["Context"] extends Context<infer U>
      ? U
      : never;
    const store = useContext(StoresContext)[storeName];
    // TODO: Fix type error.
    return useContext<ContextValue>((store.Context as unknown) as Context<
      ContextValue
    >);
  }

  function storesConfigEntries() {
    return (Object.entries as (
      obj: StoresConfig,
    ) => [keyof StoresConfig, StoresConfig[keyof StoresConfig]][])(
      storesConfig,
    );
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
