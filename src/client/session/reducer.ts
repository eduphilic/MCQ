import produce from "immer";
import { SessionAction, SessionActionType } from "./actions";

type SessionState = {
  recaptchaSiteKey: string | null;
};

const initialState: SessionState = {
  recaptchaSiteKey: null,
};

export const sessionReducer = produce((draft, action: SessionAction) => {
  switch (action.type) {
    case SessionActionType.SET_RECAPTCHA_CLIENT_KEY:
      draft.recaptchaSiteKey = action.payload.key;
  }
}, initialState);
