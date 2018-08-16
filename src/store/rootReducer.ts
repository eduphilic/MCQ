import { combineReducers } from "redux";

import { reducer as dashboard } from "features/dashboard";
import { reducer as examReview } from "features/exam-review";
import { reducer as examTaking } from "features/exam-taking";
import { reducer as landing } from "features/landing";
import { reducer as localization } from "features/localization";
import { reducer as subscriptionManagement } from "features/subscription-management";
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
