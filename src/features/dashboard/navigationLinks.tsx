import { INavigationLink } from "features/navigation";
import React from "react";
import { routePathFromLocalizationKey } from "routes";

import Assignment from "@material-ui/icons/Assignment";
import Dashboard from "@material-ui/icons/Dashboard";
import SettingsOutlined from "@material-ui/icons/SettingsOutlined";
import { AccountCardDetails } from "icons";

import { ExamBoardPage } from "features/exam-board";
import { ProgressOverviewPage } from "features/progress-overview";
import { SubscriptionManagementPage } from "features/subscription-management";
import { SettingsPage } from "./SettingsPage";

export const navigationLinks: INavigationLink[] = [
  {
    to: routePathFromLocalizationKey(
      "routes_ProgressOverview_ProgressOverviewPage",
    ),
    component: ProgressOverviewPage,
    titleLocalizationKey: "routes_ProgressOverview_ProgressOverviewPage",
    iconElement: <Dashboard />,
  },
  {
    to: routePathFromLocalizationKey("routes_ExamBoard_ExamBoardPage"),
    component: ExamBoardPage,
    titleLocalizationKey: "routes_ExamBoard_ExamBoardPage",
    iconElement: <Assignment />,
  },
  {
    to: routePathFromLocalizationKey(
      "routes_Dashboard_MembershipSubscriptionPage",
    ),
    alternateMatchPaths: [
      routePathFromLocalizationKey("routes_Dashboard_MembershipEntriesPage"),
    ],
    component: SubscriptionManagementPage,
    titleLocalizationKey: "routes_Dashboard_MembershipSubscriptionPage",
    iconElement: <AccountCardDetails />,
  },
  {
    to: routePathFromLocalizationKey("routes_Dashboard_SettingsPage"),
    component: SettingsPage,
    titleLocalizationKey: "routes_Dashboard_SettingsPage",
    iconElement: <SettingsOutlined />,
  },
];