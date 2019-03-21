import { combineReducers } from "redux";
import { landingReducer } from "../landing";
import { sessionReducer } from "../session";

export const rootReducer = combineReducers({
  landing: landingReducer,
  session: sessionReducer,
});
