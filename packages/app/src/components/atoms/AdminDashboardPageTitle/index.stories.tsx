import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { AdminDashboardPageTitle } from ".";

storiesOf("Atoms", module).add(
  "AdminDashboardPageTitle",
  withInfo()(() => {
    //

    return (
      <AdminDashboardPageTitle>
        Welcome to some Admin Dashboard page.
      </AdminDashboardPageTitle>
    );
  }),
);
