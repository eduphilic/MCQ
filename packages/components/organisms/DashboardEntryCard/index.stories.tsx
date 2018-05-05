import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DashboardEntryCard, DashboardEntryCardProps } from ".";
import { ContentCenterWrapper } from "../../../../node_modules/components/atoms/ContentCenterWrapper";

storiesOf("Organisms", module).add(
  "DashboardEntryCard",
  withInfo()(() => {
    const dashboardEntryCardProps: DashboardEntryCardProps = {
      entryTitle: "Army",
      categoryLabels: [
        "Soldier GD",
        "Soldier Tradesman",
        "Soldier Tradesman 8th Grade",
        "Soldier NA",
      ],
      categoryPrices: [10, 10, 10, 10],
      categoryActivated: [false, true, true, false],
    };

    return (
      <ContentCenterWrapper>
        <DashboardEntryCard {...dashboardEntryCardProps} />
      </ContentCenterWrapper>
    );
  }),
);
