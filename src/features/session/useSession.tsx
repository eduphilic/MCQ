import gql from "graphql-tag";
import React, { createContext, SFC, useContext } from "react";
import { Query } from "../../api";
import { QueryWithLoading } from "../../components/QueryWithLoading";

const SessionContext = createContext<Query["session"]>(null);

let retrieved = false;

export const useSession = () => {
  const sessionContext = useContext(SessionContext);

  if (!retrieved) {
    throw new Error("useSession was used outside of it's provider.");
  }

  return sessionContext;
};

const GET_SESSION = gql`
  query GetSession {
    session
  }
`;

type Response = Pick<Query, "session">;

export const AuthenticationStatusProvider: SFC = ({ children }) => (
  <QueryWithLoading<Response> query={GET_SESSION}>
    {({ data }) => {
      retrieved = true;
      return (
        <SessionContext.Provider value={data.session}>
          {children}
        </SessionContext.Provider>
      );
    }}
  </QueryWithLoading>
);
