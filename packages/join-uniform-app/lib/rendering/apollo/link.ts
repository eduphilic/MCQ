import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      // tslint:disable-next-line:no-console
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  // tslint:disable-next-line:no-console
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: getConfig().publicRuntimeConfig!.graphQLUri,
  credentials: "same-origin",
  fetch,
});

// TODO: Add CSRF Link
export const link = ApolloLink.from([errorLink, /* csrfLink */ httpLink]);
