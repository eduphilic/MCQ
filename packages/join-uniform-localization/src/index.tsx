import {
  LocalizationStringKey,
  LocalizedString as GraphQLLocalizedString,
} from "@join-uniform/graphql";
import { createContext, ReactElement, useContext, useMemo } from "react";
import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";

export type LocalizedString = GraphQLLocalizedString;

type Strings = LocalizedStringsMethods & Record<LocalizationStringKey, string>;

export const strings: Strings = new LocalizedStrings({
  // tslint:disable-next-line:no-object-literal-type-assertion
  en: {} as Record<LocalizationStringKey, string>,
});

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
