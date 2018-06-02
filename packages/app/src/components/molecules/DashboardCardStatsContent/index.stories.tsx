import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DashboardCardStatsContent } from ".";

storiesOf("Molecules", module).add(
  "DashboardCardStatsContent",
  withInfo()(() => {
    //

    return (
      <DashboardCardStatsContent>
        <DashboardCardStatsContent.Item>Item 1</DashboardCardStatsContent.Item>
        <DashboardCardStatsContent.Item>Item 2</DashboardCardStatsContent.Item>
      </DashboardCardStatsContent>
    );
  }),
);
