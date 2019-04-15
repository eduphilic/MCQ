import { models } from "@join-uniform/common";
import { createContext, ReactElement, useContext, useMemo } from "react";
import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import { LocalizedStringKey, translations } from "./translations";

export type LocalizedString = models.LocalizedString;
export type LocalizedStringKey = LocalizedStringKey;

type Strings = LocalizedStringsMethods & Record<LocalizedStringKey, string>;

export const strings: Strings = new LocalizedStrings(translations);

export const LocalizationContext = createContext<"en" | "hi">("en");

// TODO: Subscribe to localization changes.
/**
 * Renders a localized string using the current localization language.
 */
export function L(props: { localizedString: LocalizedString }) {
  const { localizedString } = props;
  const language = useContext(LocalizationContext);
  const text = useMemo(
    () => {
      if (!localizedString.hi) return localizedString.en;
      return localizedString[language]!;
    },
    [language],
  );

  return (text as unknown) as ReactElement<any>;
}
