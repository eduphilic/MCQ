import { combineReducers } from "redux";
import { configFetchReducer } from "./configFetchReducer";

export const landingReducer = combineReducers({
  config: configFetchReducer,
});
