import { ApolloCache } from "apollo-cache";
import { ClientSideState } from "./clientSideState";
import { FirebaseRemoteConfigClient } from "./services/FirebaseRemoteConfigClient";

export interface Context {
  firebaseRemoteConfigClient: FirebaseRemoteConfigClient;
  cache: ApolloCache<ClientSideState>;
}
