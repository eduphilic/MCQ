/// <reference types="firebase-functions" />
import { CloudinaryService, FirebaseRemoteConfigClient } from "./services";

export type ApolloContext = {
  firebaseRemoteConfigClient: FirebaseRemoteConfigClient;
  firebaseDatabase: FirebaseFirestore.Firestore;
  cloudinaryService: CloudinaryService;
};
