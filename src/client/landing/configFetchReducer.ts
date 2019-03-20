import { LandingPageConfigModel } from "../../common";
import { createFetchReducer } from "../util";

export const configFetchReducer = createFetchReducer<LandingPageConfigModel>(
  "[landing] Landing Page Config",
);
