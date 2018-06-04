import { createContext } from "react";

import { ActionsType } from "./ActionsType";
import { createConsumer } from "./createConsumer";
import { createProvider } from "./createProvider";

export function createStore<State, Actions extends ActionsType<State>>(
  initialState: State,
  actions: Actions,
  storeName?: string,
) {
  const context = createContext<State & Actions>(null as any);

  const Provider = createProvider<State, Actions>(
    initialState,
    actions,
    context,
  );

  const Consumer = createConsumer<State, Actions>(context, storeName);

  return {
    Provider,
    Consumer,
  };
}
