import gql from "graphql-tag";
import React, { createContext, SFC, useContext } from "react";
import { QueryWithLoading } from "../../components/QueryWithLoading";
import { AuthenticationStatus } from "../../models";

type AuthenticationStatusContextValue = AuthenticationStatus | null;

const AuthenticationStatusContext = createContext<
  AuthenticationStatusContextValue
>(null);

let retrieved = false;

export const useAuthenticationStatus = () => {
  const authenticationStatusContext = useContext(AuthenticationStatusContext);
  if (!retrieved) {
    throw new Error("useAuthenticationStatus was used outside of provider.");
  }
  return authenticationStatusContext;
};

const GET_AUTHENTICATION_STATUS = gql`
  query GetAuthenticationStatus {
    currentAuthenticationStatus {
      role
      language
    }
  }
`;

type Response = {
  currentAuthenticationStatus?: AuthenticationStatus;
};

export const AuthenticationStatusProvider: SFC = ({ children }) => (
  <QueryWithLoading<Response> query={GET_AUTHENTICATION_STATUS}>
    {({ data }) => {
      retrieved = true;
      return (
        <AuthenticationStatusContext.Provider
          value={data!.currentAuthenticationStatus || null}
        >
          {children}
        </AuthenticationStatusContext.Provider>
      );
    }}
  </QueryWithLoading>
);
