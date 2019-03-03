import { combineReducers } from "redux";
import { recaptchaReducer } from "./recaptchaReducer";

export const sessionReducer = combineReducers({
  recaptcha: recaptchaReducer,
});
