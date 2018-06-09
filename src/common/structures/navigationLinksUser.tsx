import { AccountCardDetails } from "common/icons/AccountCardDetails";
import { NavigationLinks } from "common/types/NavigationLinks";
import { pages } from "pages/pages";
import React from "react";

import Assignment from "@material-ui/icons/Assignment";
import Dashboard from "@material-ui/icons/Dashboard";
import Settings from "@material-ui/icons/Settings";

/**
 * User Dashboard navigation links.
 */
export const navigationLinksUser: NavigationLinks = [
  {
    titleLocalizationKey: "userLinkDashboard",
    to: "/dashboard",
    component: pages.UserDashboard,
    iconElement: <Dashboard />,
  },
  {
    titleLocalizationKey: "userLinkExamPack",
    to: "/exam-pack",
    component: pages.UserExamPack,
    iconElement: <Assignment />,
  },
  {
    titleLocalizationKey: "userLinkMembership",
    to: "/membership",
    component: pages.UserMembership,
    iconElement: <AccountCardDetails />,
  },
  {
    titleLocalizationKey: "userLinkSettings",
    to: "/settings",
    component: pages.UserSettings,
    iconElement: <Settings />,
  },
];
