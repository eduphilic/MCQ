import { createFetchOperationReducer } from "client/store";
import produce from "immer";
import { SessionAction } from "./actions";
import { FETCH_OPERATION_RECAPTCHA } from "./fetchOperations";

type SessionState = {
  recaptcha: ReturnType<typeof recaptchaReducer>;
};

const { reducer: recaptchaReducer, initialState: recaptchaInitialState } = createFetchOperationReducer<typeof FETCH_OPERATION_RECAPTCHA, string>(FETCH_OPERATION_RECAPTCHA); // prettier-ignore

const initialState: SessionState = {
  recaptcha: recaptchaInitialState,
};

export const sessionReducer = produce((draft, action: SessionAction) => {
  draft.recaptcha = recaptchaReducer(draft.recaptcha, action);
}, initialState);
