import { LocalizationLanguage, QueryResolvers } from "../generated";

export const language: QueryResolvers.LanguageResolver = () => {
  // TODO: Read from user.
  return LocalizationLanguage.ENGLISH;
};
