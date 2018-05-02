import { combineReducers } from "redux";
import { RootActions } from "./rootActions";
import { RootState } from "./rootState";

import { adminReducer } from "./admin/reducer";
import { appReducer } from "./app/reducer";

export const rootReducer = combineReducers<RootState, RootActions>({
  app: appReducer,
  admin: adminReducer,
} as any);
