import { Context } from "koa";
import { getFirebaseRemoteConfigClient } from "./services";

export interface ServerContext {
  ctx: Context;
  firebaseRemoteConfigClient: ReturnType<typeof getFirebaseRemoteConfigClient>;
}
