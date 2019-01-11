// tslint:disable:no-object-literal-type-assertion
import { models } from "@join-uniform/common";

const localizedStrings: Record<LocalizedStringKey, models.LocalizedString> = {
  landingFooter: {
    en: "Copyright : Eduphilic Consultancy Pvt Ltd 2018",
    hi: null,
  },
};

export const translations = Object.entries(localizedStrings).reduce(
  (accumulator, [key, localizedString]) => {
    const localizedStringKey = key as LocalizedStringKey;

    accumulator.en[localizedStringKey] = localizedString.en;
    if (localizedString.hi !== null) {
      accumulator.hi[localizedStringKey] = localizedString.hi;
    }

    return accumulator;
  },
  {
    en: {} as Record<LocalizedStringKey, string>,
    hi: {} as Record<LocalizedStringKey, string>,
  },
);

export type LocalizedStringKey = "landingFooter";
