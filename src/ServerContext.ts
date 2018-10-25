import { Context } from "koa";
import { getFirebaseRemoteConfigClient } from "./services";

export interface ServerContext {
  ctx: Context;
  firebaseDatabase: FirebaseFirestore.Firestore;
  firebaseRemoteConfigClient: ReturnType<typeof getFirebaseRemoteConfigClient>;
}
