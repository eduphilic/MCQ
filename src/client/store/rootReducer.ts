import { combineReducers } from "redux";
import { sessionReducer } from "../session";

/* tslint:disable-next-line:no-console */
console.log({ sessionReducer });

export const rootReducer = combineReducers({ session: sessionReducer });
