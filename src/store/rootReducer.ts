import { combineReducers } from "redux";

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

export const rootReducer = combineReducers(reducers);
