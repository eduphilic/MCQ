import { combineReducers } from "redux";

import { reducer as dashboard } from "features/dashboard";
import { reducer as examBoard } from "features/exam-board";
import { reducer as examTaking } from "features/exam-taking";
import { reducer as landing } from "features/landing";
import { reducer as localization } from "features/localization";
import { reducer as navigation } from "features/navigation";
import { reducer as session } from "features/session";
import { reducer as subscriptionManagement } from "features/subscription-management";

const reducers = {
  dashboard,
  examBoard,
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
