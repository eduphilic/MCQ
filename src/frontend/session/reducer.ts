import { combineReducers } from "redux";
import { createReducer } from "../util";

const sessionConfigReducer = createReducer(
  {
    recaptchaSiteKey: "6LfE44wUAAAAAEcPLTPdUgi59UoFR5gR4kDON5A4",
  },
  {},
);

export const sessionReducer = combineReducers({
  config: sessionConfigReducer,
});
