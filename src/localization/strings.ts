import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";

import { commonEn } from "./strings.common.en";
import { commonHi } from "./strings.common.hi";
import { componentsEn } from "./strings.components.en";
import { componentsHi } from "./strings.components.hi";
import { dashboardEn } from "./strings.dashboard.en";
import { dashboardHi } from "./strings.dashboard.hi";
import { pagesEn } from "./strings.pages.en";
import { pagesHi } from "./strings.pages.hi";
import { routesEn } from "./strings.routes.en";
import { routesHi } from "./strings.routes.hi";

const strings = {
  en: {
    ...commonEn,
    ...componentsEn,
    ...dashboardEn,
    ...pagesEn,
    ...routesEn,
  },
  hi: {
    ...commonHi,
    ...componentsHi,
    ...dashboardHi,
    ...pagesHi,
    ...routesHi,
  },
};

export type Strings = typeof strings["en"];

type StringsWithLocalizationMethods = Strings & LocalizedStringsMethods;

const localizedStrings: StringsWithLocalizationMethods = new LocalizedStrings<
  Strings
>(strings as any);

export { localizedStrings as strings };
