import { reducer as localization } from "localization";
import { combineReducers, createStore as createReduxStore } from "redux";
import { createEnhancerDevTools } from "./createEnhancerDevTools";

const createStore = () => {
  const store = createReduxStore(
    combineReducers({
      localization,
    }),
    createEnhancerDevTools(),
  );

  return store;
};

export { createStore };
