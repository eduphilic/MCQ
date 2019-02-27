import { createFetchOperationActions, FetchOperationAction } from "../store";
import { FETCH_OPERATION_RECAPTCHA } from "./fetchOperations";

export enum SessionActionType {
  SET_RECAPTCHA_CLIENT_KEY = "[session] Set Recaptcha Client Key",
}

export type SessionAction = FetchOperationAction<
  typeof FETCH_OPERATION_RECAPTCHA,
  string
>;

const recaptchaActions = createFetchOperationActions<typeof FETCH_OPERATION_RECAPTCHA, string>(FETCH_OPERATION_RECAPTCHA) // prettier-ignore

export const sessionActions = {
  recaptcha: recaptchaActions,
};
