import React, { Context, ReactNode, SFC } from "react";

/**
 * Creates a context consumer to connect the supplied context store. It throws
 * an error if used outside of the context.
 *
 * @param context The React Context which is consumed.
 * @param storeName Optional store name to display in errors.
 */
export const createConsumer = <State, Actions>(
  context: Context<State & Actions>,
  storeName?: string,
) => {
  const Consumer: SFC<{
    children: (store: State & Actions) => ReactNode;
  }> = ({ children }) => (
    <context.Consumer>
      {contextStore => {
        if (!contextStore) {
          throw new Error(
            `Context consumer used outside of ${
              storeName ? `${storeName} ` : ""
            }provider.`,
          );
        }

        return children(contextStore);
      }}
    </context.Consumer>
  );

  return Consumer;
};
