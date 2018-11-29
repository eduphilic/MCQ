import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { link } from "./link";

let apolloClient: ApolloClient<any> | null = null;

export function initializeApollo(initialState?: any) {
  // Reuse Apollo client on browser. Don't reuse on server because data should
  // be unique between web requests.
  if (apolloClient && process.browser) {
    return apolloClient;
  }

  if (!apolloClient) {
    apolloClient = new ApolloClient({
      connectToDevTools:
        process.browser && process.env.NODE_ENV === "development",
      ssrMode: !process.browser,
      link,
      cache: new InMemoryCache().restore(initialState || {}),
    });
  }

  return apolloClient;
}
