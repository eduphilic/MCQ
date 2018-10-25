import { LocalizationSupportedLanguages } from "../../models";

export type LocalizationState = ClientStateObject<
  "Localization",
  {
    language: LocalizationSupportedLanguages;
  }
>;
