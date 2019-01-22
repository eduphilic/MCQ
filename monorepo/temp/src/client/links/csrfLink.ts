import { ApolloLink } from "apollo-link";

/**
 * Attaches cross site request forgery (CSRF) tokens to outgoing requests. It
 * uses the initial token attached by the static site render and then updates it
 * as new tokens are provided in server responses.
 */
export const csrfLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      ...operation.getContext().headers,
      "x-xsrf-token": window.__CSRF__,
    },
  });

  return forward!(operation).map(data => {
    const context = operation.getContext();
    if (!context.response || !context.response.headers) {
      throw new Error("[csrfLink] Unable to retrieve response headers.");
    }
    const csrfToken = (context.response as Response).headers.get(
      "x-xsrf-token",
    );
    if (!csrfToken) {
      throw new Error(
        "[csrfLink] Expected CSRF header was not attached to response.",
      );
    }
    window.__CSRF__ = csrfToken;
    return data;
  });
});

declare global {
  interface Window {
    __CSRF__: string;
  }
}
