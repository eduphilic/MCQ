import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";

import { commonEn } from "./strings.common.en";
import { commonHi } from "./strings.common.hi";
import { componentsEn } from "./strings.components.en";
import { componentsHi } from "./strings.components.hi";
import { dashboardEn } from "./strings.dashboard.en";
import { dashboardHi } from "./strings.dashboard.hi";
import { examReviewEn } from "./strings.exam-review.en";
import { examReviewHi } from "./strings.exam-review.hi";
import { landingEn } from "./strings.landing.en";
import { landingHi } from "./strings.landing.hi";
import { pagesEn } from "./strings.pages.en";
import { pagesHi } from "./strings.pages.hi";
import { routesEn } from "./strings.routes.en";
import { routesHi } from "./strings.routes.hi";
import { sessionEn } from "./strings.session.en";
import { sessionHi } from "./strings.session.hi";
import { subscriptionManagementEn } from "./strings.subscription-management.en";
import { subscriptionManagementHi } from "./strings.subscription-management.hi";

const strings = {
  en: {
    ...commonEn,
    ...componentsEn,
    ...dashboardEn,
    ...examReviewEn,
    ...landingEn,
    ...pagesEn,
    ...routesEn,
    ...sessionEn,
    ...subscriptionManagementEn,
  },
  hi: {
    ...commonHi,
    ...componentsHi,
    ...dashboardHi,
    ...examReviewHi,
    ...landingHi,
    ...pagesHi,
    ...routesHi,
    ...sessionHi,
    ...subscriptionManagementHi,
  },
};

export type Strings = typeof strings["en"];

type StringsWithLocalizationMethods = Strings & LocalizedStringsMethods;

const localizedStrings: StringsWithLocalizationMethods = new LocalizedStrings<
  Strings
>(strings as any);

export { localizedStrings as strings };
