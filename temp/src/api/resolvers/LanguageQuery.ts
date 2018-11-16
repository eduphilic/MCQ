import { LocalizationLanguage, QueryLanguageResolver } from "../generated";

export const language: QueryLanguageResolver = () => {
  // TODO: Read from user.
  return LocalizationLanguage.ENGLISH;
};
