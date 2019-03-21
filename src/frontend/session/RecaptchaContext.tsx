import React, { createContext, ReactNode, useContext } from "react";
import { connect } from "react-redux";
import { StoreState } from "../store";

const Context = createContext<string | null>(null);

type OwnProps = {
  children?: ReactNode;
};

type StateProps = {
  recaptchaSiteKey: string | null;
};

type Props = OwnProps & StateProps;

function RecaptchaProvider({ children, recaptchaSiteKey }: Props) {
  return (
    <Context.Provider value={recaptchaSiteKey}>{children}</Context.Provider>
  );
}

const RecaptchaProviderProvider = connect(
  ({ session: { config } }: StoreState): StateProps => ({
    recaptchaSiteKey: config.recaptchaSiteKey,
  }),
)(RecaptchaProvider);

export { RecaptchaProviderProvider as RecaptchaProvider };

export function useRecaptchaContext() {
  return useContext(Context);
}
