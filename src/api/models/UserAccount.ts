import { LocalizationLanguage, UserRole } from "../generated";

export type UserAccount = {
  id: string;
  username: string;
  fullName: string;
  language: LocalizationLanguage;
  passwordHash: string;
  role: UserRole;
};
