import { combineReducers } from "redux";
import { RootActions } from "./rootActions";
import { RootState } from "./rootState";

import { appReducer } from "./app/reducer";

export const rootReducer = combineReducers<RootState, RootActions>({
  app: appReducer,
});
