import { createStore as reduxCreateStore, StoreEnhancer } from "redux";
import { rootReducer } from "./rootReducer";
import { StoreAction } from "./StoreAction";
import { StoreState } from "./StoreState";

export type AppStore = ReturnType<typeof createStoreOld>;

const browserDevToolsExtensionEnhancer = (() => {
  if (process.env.NODE_ENV !== "development") return;
  if (!process.browser) return undefined;
  if (!window.__REDUX_DEVTOOLS_EXTENSION__) return undefined;
  return window.__REDUX_DEVTOOLS_EXTENSION__();
})();

export function createStoreOld(initialState?: StoreState) {
  return reduxCreateStore<StoreState, StoreAction, {}, {}>(
    rootReducer,
    initialState,
    browserDevToolsExtensionEnhancer,
  );
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => StoreEnhancer<{}>;
  }
}
