import { storiesOf } from "@storybook/react";
import { AccountCardDetails } from "common/icons/AccountCardDetails";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import Assignment from "@material-ui/icons/Assignment";
import Dashboard from "@material-ui/icons/Dashboard";
import Settings from "@material-ui/icons/Settings";

import { AppLayout } from "./AppLayout";

const stories = storiesOf("Navigation", module);

stories.addDecorator(story => (
  <MemoryRouter initialEntries={["/dashboard"]}>{story()}</MemoryRouter>
));

stories.add("AppLayout", () => {
  //

  return (
    <AppLayout
      links={[
        {
          titleLocalizationKey: "userLinkDashboard",
          to: "/dashboard",
          component: () => <div />,
          iconElement: <Dashboard />,
        },
        {
          titleLocalizationKey: "userLinkExamPack",
          to: "/exam-pack",
          component: () => <div />,
          iconElement: <Assignment />,
          disabled: true,
        },
        {
          titleLocalizationKey: "userLinkMembership",
          to: "/membership",
          component: () => <div />,
          iconElement: <AccountCardDetails />,
        },
        {
          titleLocalizationKey: "userLinkSettings",
          to: "/settings",
          component: () => <div />,
          iconElement: <Settings />,
        },
      ]}
    />
  );
});
