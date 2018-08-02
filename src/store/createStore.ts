import { combineReducers, createStore as createReduxStore } from "redux";
import { createEnhancerDevTools } from "./createEnhancerDevTools";

import { reducer as dashboard } from "dashboard";
import { reducer as examReview } from "exam-review";
import { reducer as examTaking } from "exam-taking";
import { reducer as landing } from "landing";
import { reducer as localization } from "localization";
import { reducer as navigation } from "navigation";
import { reducer as session } from "session";
import { reducer as subscriptionManagement } from "subscription-management";

const reducers = {
  dashboard,
  examReview,
  examTaking,
  landing,
  localization,
  navigation,
  session,
  subscriptionManagement,
};

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
