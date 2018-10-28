import { SessionUser } from "./SessionUser";

/**
 * Full user account as represented in the database.
 */
export type SessionUserServer = SessionUser & {
  accountId: string;
  passwordHash: string;
};
