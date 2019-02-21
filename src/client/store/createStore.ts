import { createStore as reduxCreateStore } from "redux";
import { rootReducer } from "./rootReducer";
import { StoreState } from "./StoreState";

export function createStore(initialState?: StoreState) {
  return reduxCreateStore(rootReducer, initialState);
}
