import { storiesOf } from "@storybook/react";
import { ContentCenterWrapper } from "componentsV0/ContentCenterWrapper";
import React from "react";
import { DashboardEntryCard, DashboardEntryCardProps } from ".";

storiesOf("Components", module).add("DashboardEntryCard", () => {
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
});
