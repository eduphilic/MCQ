import { StoreAction } from "../store";

export enum SessionActionType {
  SET_RECAPTCHA_CLIENT_KEY = "[session] Set Recaptcha Client Key",
}

export type SessionAction = {
  type: SessionActionType.SET_RECAPTCHA_CLIENT_KEY;
  payload: { key: string };
};

export const sessionActions = {
  setRecaptchaClientKey: (key: string): StoreAction => ({
    type: SessionActionType.SET_RECAPTCHA_CLIENT_KEY,
    payload: { key },
  }),
};
