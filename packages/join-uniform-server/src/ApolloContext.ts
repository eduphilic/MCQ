/// <reference types="firebase-functions" />
import { FirebaseRemoteConfigClient } from "./services";

export type ApolloContext = {
  firebaseRemoteConfigClient: FirebaseRemoteConfigClient;
  firebaseDatabase: FirebaseFirestore.Firestore;
};
