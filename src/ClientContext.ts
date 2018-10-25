import { ApolloCache } from "apollo-cache";
import { ClientState } from "./ClientState";

export type ClientContext = {
  cache: ApolloCache<ClientState>;
};
