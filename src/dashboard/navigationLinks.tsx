import { INavigationLink } from "navigation";
import React from "react";
import { routePathFromLocalizationKey } from "routes";

import Assignment from "@material-ui/icons/Assignment";
import Dashboard from "@material-ui/icons/Dashboard";
import Settings from "@material-ui/icons/Settings";
import { AccountCardDetails } from "icons";

import { DashboardPage } from "./DashboardPage";
import { ExamPackPage } from "./ExamPackPage";
import { MembershipPage } from "./MembershipPage";
import { SettingsPage } from "./SettingsPage";

export const navigationLinks: INavigationLink[] = [
  {
    to: routePathFromLocalizationKey("routes_Dashboard_DashboardPage"),
    component: DashboardPage,
    titleLocalizationKey: "routes_Dashboard_DashboardPage",
    iconElement: <Dashboard />,
  },
  {
    to: routePathFromLocalizationKey("routes_Dashboard_ExamPackPage"),
    component: ExamPackPage,
    titleLocalizationKey: "routes_Dashboard_ExamPackPage",
    iconElement: <Assignment />,
  },
  {
    to: routePathFromLocalizationKey(
      "routes_Dashboard_MembershipSubscriptionPage",
    ),
    component: MembershipPage,
    titleLocalizationKey: "routes_Dashboard_MembershipSubscriptionPage",
    iconElement: <AccountCardDetails />,
  },
  {
    to: routePathFromLocalizationKey("routes_Dashboard_SettingsPage"),
    component: SettingsPage,
    titleLocalizationKey: "routes_Dashboard_SettingsPage",
    iconElement: <Settings />,
  },
];
