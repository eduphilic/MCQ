import { createStore as reduxCreateStore } from "redux";
import { rootReducer } from "./rootReducer";
import { StoreAction } from "./StoreAction";
import { StoreState } from "./StoreState";

export type AppStore = ReturnType<typeof createStore>;

export function createStore(initialState?: StoreState) {
  return reduxCreateStore<StoreState, StoreAction, {}, {}>(
    rootReducer,
    initialState,
  );
}
