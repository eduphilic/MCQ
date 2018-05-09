import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { DashboardCard } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { DashboardCardItem } from "./DashboardCardItem";

storiesOf("Molecules", module).add(
  "DashboardCard",
  withInfo({ propTablesExclude: [ContentCenterWrapper as any] })(() => {
    const items: DashboardCardItem[] = [
      { key: "Soldier GD " },
      { key: "Soldier Tradesman" },
      { key: "Soldier Tradesman 8th Grade" },
    ];

    return (
      <ContentCenterWrapper>
        <DashboardCard
          items={items}
          title="Army Entry"
          editCaptionText="Click to Edit Entry"
          onItemEditClick={action("onItemEditClick")}
          onRequestDeleteClick={action("onRequestDeleteClick")}
        />
      </ContentCenterWrapper>
    );
  }),
);
