import { LocalizationStringKey } from "@join-uniform/graphql";
import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";

type Strings = LocalizedStringsMethods & Record<LocalizationStringKey, string>;

export const strings: Strings = new LocalizedStrings({
  // tslint:disable-next-line:no-object-literal-type-assertion
  en: {} as Record<LocalizationStringKey, string>,
});
