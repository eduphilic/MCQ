import { storiesOf } from "@storybook/react";
import React from "react";
import { DashboardLayout } from "./LayoutDashboard";

const stories = storiesOf("LayoutDashboard", module);

stories.add("default", () => (
  <DashboardLayout>
    <p>Page Contents</p>
  </DashboardLayout>
));
