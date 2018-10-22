import { ApolloCache } from "apollo-cache";
import { State } from "./state";

export interface Context {
  cache: ApolloCache<State>;
}
