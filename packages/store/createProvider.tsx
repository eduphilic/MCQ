import React, { SFC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "./createStore";

export const createProvider = () => {
  const store = createStore();

  const Provider: SFC<{}> = ({ children }) => (
    <ReduxProvider store={store as any}>{children}</ReduxProvider>
  );

  return Provider;
};
