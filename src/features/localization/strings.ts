import LocalizedStrings from "react-localization";
import { LocalizationLanguage, LocalizedString } from "../../api";

const stringTranslations = new Map<string, LocalizedString>();
// The constructor is missing the optional options field.
// @ts-ignore
const strings = new LocalizedStrings({ en: {} }, { logsEnabled: false });

// tslint:disable-next-line:function-name
export function l(localizedString: LocalizedString) {
  if (!localizedString.key) {
    throw new Error("Key required in localized string.");
  }

  if (!stringTranslations.has(localizedString.key)) {
    stringTranslations.set(localizedString.key, localizedString);
    const english: Record<string, string> = {};
    const hindi: Record<string, string> = {};
    for (const [key, translation] of stringTranslations.entries()) {
      english[key] = translation.en;
      if (translation.hi) hindi[key] = translation.hi;
    }
    const newContent = { en: english, hi: hindi };
    strings.setContent(newContent);
  }

  return (strings as any)[localizedString.key];
}

export function setLanguage(language: LocalizationLanguage) {
  strings.setLanguage(language === LocalizationLanguage.ENGLISH ? "en" : "hi");
}
