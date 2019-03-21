import { Reducer } from "redux";
import { rootReducer } from "./rootReducer";

type ReducerState<T> = T extends Reducer<infer U> ? U : never;

export type StoreState = ReducerState<typeof rootReducer>;
