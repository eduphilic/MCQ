import { AccountCardDetails } from "common/icons/AccountCardDetails";
import { NavigationLinks } from "common/types/NavigationLinks";
import * as userPages from "pages/user";
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
    component: userPages.UserDashboard,
    iconElement: <Dashboard />,
  },
  {
    titleLocalizationKey: "userLinkExamPack",
    to: "/exam-pack",
    component: userPages.UserExamPack,
    iconElement: <Assignment />,
  },
  {
    titleLocalizationKey: "userLinkMembership",
    to: "/membership",
    component: userPages.UserMembership,
    iconElement: <AccountCardDetails />,
  },
  {
    titleLocalizationKey: "userLinkSettings",
    to: "/settings",
    component: userPages.UserSettings,
    iconElement: <Settings />,
  },
];
