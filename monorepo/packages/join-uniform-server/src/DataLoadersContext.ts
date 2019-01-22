import { FirebaseRemoteConfigClient } from "./services";

export type DataLoadersContext = {
  firebaseRemoteConfigClient: FirebaseRemoteConfigClient;
  firebaseDatabase: FirebaseFirestore.Firestore;
};
