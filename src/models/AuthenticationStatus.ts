import { LocalizationSupportedLanguages } from "./LocalizationSupportedLanguages";
import { SessionUser } from "./SessionUser";
import { SessionUserRole } from "./SessionUserRole";

/**
 * Used to represent a currently authenticated user in the client.
 *
 * When a user is logged in, the fields "role" and "language" will be populated.
 * Profile is populated by the User dashboard when the user reviews their
 * profile.
 */
export type AuthenticationStatus = {
  role: SessionUserRole;
  language: LocalizationSupportedLanguages;
  profile?: SessionUser;
};
