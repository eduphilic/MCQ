import { strings } from "localization";

export const routes: {
  path: string;
  pageTitleLocalizationKey: keyof typeof strings;
}[] = [
  {
    path: "/welcome/entries",
    pageTitleLocalizationKey: "dashboardLinkOnboarding1",
  },
  {
    path: "/welcome/subscriptions",
    pageTitleLocalizationKey: "dashboardLinkOnboarding2",
  },
];
