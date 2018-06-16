import { ActionsType } from "./ActionsType";

export type StoreValue<State, Actions extends ActionsType<State>> = Readonly<
  State &
    Actions & {
      setState: (update: Partial<State>) => void;
    }
>;
