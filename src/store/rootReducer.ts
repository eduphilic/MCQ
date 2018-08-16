import { combineReducers } from "redux";

import { reducer as examReview } from "exam-review";
import { reducer as examTaking } from "exam-taking";
import { reducer as dashboard } from "features/dashboard";
import { reducer as subscriptionManagement } from "features/subscription-management";
import { reducer as landing } from "landing";
import { reducer as localization } from "localization";
import { reducer as navigation } from "navigation";
import { reducer as session } from "session";

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
