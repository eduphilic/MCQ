import { LocalizationSupportedLanguages } from "../../models";

export type LocalizationState = ClientStateObject<
  "localization",
  {
    language: LocalizationSupportedLanguages;
  }
>;
