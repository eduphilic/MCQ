import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { AdminDashboardTemplate } from ".";

storiesOf("Templates", module).add(
  "AdminDashboardTemplate",
  withInfo()(() => <AdminDashboardTemplate />),
);
