import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import Assignment from "@material-ui/icons/Assignment";
import Dashboard from "@material-ui/icons/Dashboard";
import Settings from "@material-ui/icons/Settings";
import { AccountCardDetails } from "icons";

import { AppLayout } from "./AppLayout";

const stories = storiesOf("Navigation", module);

stories.addDecorator(story => (
  <MemoryRouter initialEntries={["/dashboard"]}>{story()}</MemoryRouter>
));

stories.add("AppLayout", () => {
  //

  return (
    <AppLayout
      enableSwipeNavigation
      links={[
        {
          titleLocalizationKey: "routes_Dashboard_DashboardPage",
          to: "/dashboard",
          component: () => <div />,
          iconElement: <Dashboard />,
        },
        {
          titleLocalizationKey: "routes_Dashboard_ExamPackPage",
          to: "/exam-pack",
          component: () => <div />,
          iconElement: <Assignment />,
          disabled: true,
        },
        {
          titleLocalizationKey: "routes_Dashboard_MembershipPage",
          to: "/membership",
          component: () => <div />,
          iconElement: <AccountCardDetails />,
        },
        {
          titleLocalizationKey: "routes_Dashboard_SettingsPage",
          to: "/settings",
          component: () => <div />,
          iconElement: <Settings />,
        },
      ]}
    />
  );
});
