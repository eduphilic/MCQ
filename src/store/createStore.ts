import { combineReducers, createStore as createReduxStore } from "redux";
import { createEnhancerDevTools } from "./createEnhancerDevTools";

import { reducer as examTaking } from "exam-taking";
import { reducer as localization } from "localization";

const reducers = {
  localization,
  examTaking,
};

// tslint:disable-next-line:interface-over-type-literal
export type State = {
  [P in keyof typeof reducers]: ReturnType<typeof reducers[P]>
};

const createStore = () => {
  const store = createReduxStore(
    combineReducers(reducers),
    createEnhancerDevTools(),
  );

  return store;
};

export { createStore };
