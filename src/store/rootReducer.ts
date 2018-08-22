import { combineReducers } from "redux";

import { reducer as examBoard } from "features/exam-board";
import { reducer as examOverview } from "features/exam-overview";
import { reducer as examTaking } from "features/exam-taking";
import { reducer as interfaceTours } from "features/interface-tours";
import { reducer as landing } from "features/landing";
import { reducer as localization } from "features/localization";
import { reducer as navigation } from "features/navigation";
import { reducer as session } from "features/session";
import { reducer as subscriptionManagement } from "features/subscription-management";

const reducers = {
  examBoard,
  examOverview,
  examTaking,
  interfaceTours,
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
