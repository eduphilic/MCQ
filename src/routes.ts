import { LocalizationKey } from "common/types/LocalizationKey";
import { strings } from "localization";

export const routes: {
  path: string;
  pageTitleLocalizationKey: keyof typeof strings;
}[] = [
  {
    path: "/",
    pageTitleLocalizationKey: "routes_pages_Landing_LandingHome",
  },
  {
    path: "/reset-password",
    pageTitleLocalizationKey: "routes_pages_Landing_LandingPasswordReset",
  },
  {
    path: "/welcome/entries",
    pageTitleLocalizationKey: "routes_Dashboard_OnboardingEntriesPage",
  },
  {
    path: "/welcome/subscriptions",
    pageTitleLocalizationKey: "routes_Dashboard_OnboardingSubscriptionPage",
  },
];

export const routePathFromLocalizationKey = (
  localizationKey: LocalizationKey,
) => {
  const route = routes.find(
    r => r.pageTitleLocalizationKey === localizationKey,
  );
  if (!route) {
    throw new Error(
      `No route matches the provided localization key: ${localizationKey}`,
    );
  }
  return route.path;
};
