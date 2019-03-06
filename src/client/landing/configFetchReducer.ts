import { LandingPageConfig } from "../../common";
import { createFetchReducer } from "../util";

export const configFetchReducer = createFetchReducer<LandingPageConfig>(
  "[landing] Landing Page Config",
);
