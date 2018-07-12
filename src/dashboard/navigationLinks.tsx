import { INavigationLink } from "navigation";
import React from "react";

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
    to: "/dashboard",
    component: DashboardPage,
    titleLocalizationKey: "routes_Dashboard_DashboardPage",
    iconElement: <Dashboard />,
  },
  {
    to: "/exam-pack",
    component: ExamPackPage,
    titleLocalizationKey: "routes_Dashboard_ExamPackPage",
    iconElement: <Assignment />,
  },
  {
    to: "/membership",
    component: MembershipPage,
    titleLocalizationKey: "routes_Dashboard_MembershipPage",
    iconElement: <AccountCardDetails />,
  },
  {
    to: "/settings",
    component: SettingsPage,
    titleLocalizationKey: "routes_Dashboard_SettingsPage",
    iconElement: <Settings />,
  },
];
