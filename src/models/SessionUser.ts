import { LocalizationSupportedLanguages } from "./LocalizationSupportedLanguages";
import { SessionUserRole } from "./SessionUserRole";

export type SessionUser = {
  phoneNumber: string;
  fullName: string;
  emailAddress: string;
  language: LocalizationSupportedLanguages;
  role: SessionUserRole;
};
