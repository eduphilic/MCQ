import gql from "graphql-tag";
import React, { createContext, ReactNode } from "react";
import { Query } from "../../api";
import { QueryWithLoading } from "../../components/QueryWithLoading";

let sessionRetrieved = false;

const GET_SESSION = gql`
  query GetSession {
    session
  }
`;

/**
 * Makes available the current role of the user or `null` if the user is not
 * logged in.
 */
export const SessionContext = createContext<Query["session"]>(null);

/**
 * Provides a session provider which has performed a GraphQL query for the
 * current session.
 */
export function SessionProvider(props: { children?: ReactNode }) {
  return (
    <QueryWithLoading<Pick<Query, "session">> query={GET_SESSION}>
      {({ data }) => {
        sessionRetrieved = true;

        return (
          <SessionContext.Provider value={data.session}>
            {props.children}
          </SessionContext.Provider>
        );
      }}
    </QueryWithLoading>
  );
}

/**
 * Returns whether or not the session was requested through the use of a
 * `SessionProvider`. This is used by `useSession` to throw an error if it is
 * used outside a `SessionProvider` to ensure a query was performed for the
 * session status.
 *
 * @internal
 */
export function wasSessionRetrieved() {
  return sessionRetrieved;
}
