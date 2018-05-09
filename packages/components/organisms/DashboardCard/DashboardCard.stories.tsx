import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { DashboardCard } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { DashboardCardColumnType } from "./DashboardCardColumnType";
import { DashboardCardItem } from "./DashboardCardItem";

storiesOf("Organisms", module).add(
  "DashboardCard",
  withInfo({ propTablesExclude: [ContentCenterWrapper as any] })(() => {
    const items: DashboardCardItem[] = [
      {
        key: "0",
        columns: [{ primaryText: "Soldier GD", secondaryText: "10th" }],
      },
      {
        key: "1",
        columns: [{ primaryText: "Soldier Tradesman", secondaryText: "10th" }],
      },
      {
        key: "2",
        columns: [
          { primaryText: "Soldier Tradesman 8th Grade", secondaryText: "8th" },
        ],
      },
      {
        key: "3",
        columns: [{ primaryText: "Soldier GD", secondaryText: "12th" }],
      },
    ];

    // const columnLabels = ["Category", "", "Cost Per Paper", ""];
    const columnLabels = ["Category"];
    const columnTypes: DashboardCardColumnType[] = ["dual-line"];

    return (
      <ContentCenterWrapper>
        <DashboardCard
          items={items}
          title="Army Entry"
          editCaptionText="Click to Edit Entry"
          columnLabels={columnLabels}
          columnTypes={columnTypes}
          onItemEditClick={action("onItemEditClick")}
          onRequestDeleteClick={action("onRequestDeleteClick")}
        />
      </ContentCenterWrapper>
    );
  }),
);
