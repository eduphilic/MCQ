import React, { createContext, ReactNode, useContext } from "react";
import { connect } from "react-redux";
import { StoreState } from "../store";

const Context = createContext<string | null>(null);

type Props = {
  children?: ReactNode;
  recaptchaSiteKey: string | null;
};

function RecaptchaProvider({ children, recaptchaSiteKey }: Props) {
  return (
    <Context.Provider value={recaptchaSiteKey}>{children}</Context.Provider>
  );
}

const RecaptchaProviderProvider = connect((_state: StoreState) => ({
  // TODO: Handle null.
  recaptchaSiteKey: "",
  // recaptchaSiteKey: state.session.recaptcha.data,
}))(RecaptchaProvider);

export { RecaptchaProviderProvider as RecaptchaProvider };

export function useRecaptchaContext() {
  return useContext(Context);
}
