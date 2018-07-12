import { strings } from "localization";

export const routes: {
  path: string;
  pageTitleLocalizationKey: keyof typeof strings;
}[] = [
  {
    path: "/welcome/entries",
    pageTitleLocalizationKey: "routes_Dashboard_OnboardingEntriesPage",
  },
  {
    path: "/welcome/subscriptions",
    pageTitleLocalizationKey: "routes_Dashboard_OnboardingSubscriptionPage",
  },
];
