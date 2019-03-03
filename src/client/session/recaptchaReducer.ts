import { createFetchReducer } from "../util";

export const recaptchaReducer = createFetchReducer<string>(
  "[session] Recaptcha",
);
