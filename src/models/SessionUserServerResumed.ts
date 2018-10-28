import { SessionUserServer } from "./SessionUserServer";

/**
 * A partial user account for use in server side validation. It is stored in the
 * session cookie and encrypted using JWT.
 */
export type SessionUserServerResumed = Pick<
  SessionUserServer,
  "accountId" | "role"
>;
