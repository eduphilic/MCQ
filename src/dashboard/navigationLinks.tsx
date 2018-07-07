import { INavigationLink } from "navigation";
import React from "react";

import Assignment from "@material-ui/icons/Assignment";
import Dashboard from "@material-ui/icons/Dashboard";
import Settings from "@material-ui/icons/Settings";
import { AccountCardDetails } from "common/icons/AccountCardDetails";

import { DashboardPage } from "./DashboardPage";
import { ExamPackPage } from "./ExamPackPage";
import { MembershipPage } from "./MembershipPage";
import { SettingsPage } from "./SettingsPage";

export const navigationLinks: INavigationLink[] = [
  {
    to: "/dashboard",
    component: DashboardPage,
    titleLocalizationKey: "userLinkDashboard",
    iconElement: <Dashboard />,
  },
  {
    to: "/exam-pack",
    component: ExamPackPage,
    titleLocalizationKey: "userLinkExamPack",
    iconElement: <Assignment />,
  },
  {
    to: "/membership",
    component: MembershipPage,
    titleLocalizationKey: "userLinkMembership",
    iconElement: <AccountCardDetails />,
  },
  {
    to: "/settings",
    component: SettingsPage,
    titleLocalizationKey: "userLinkSettings",
    iconElement: <Settings />,
  },
];
