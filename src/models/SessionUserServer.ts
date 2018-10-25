import { SessionUser } from "./SessionUser";

export type SessionUserServer = SessionUser & {
  passwordHash: string;
};
