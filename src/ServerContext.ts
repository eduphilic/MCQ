import { Context } from "koa";
import {
  getFirebaseRemoteConfigClient,
  getSessionCookieService,
} from "./services";

export interface ServerContext {
  ctx: Context;
  firebaseDatabase: FirebaseFirestore.Firestore;
  firebaseRemoteConfigClient: ReturnType<typeof getFirebaseRemoteConfigClient>;
  sessionCookieService: ReturnType<typeof getSessionCookieService>;
}
