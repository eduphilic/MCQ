import { initializeStores } from "./initializeStores";

export const { StoresProvider, useStore, useRootStore } = initializeStores({});

export type RootStore = ReturnType<typeof useRootStore>;
