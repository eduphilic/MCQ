import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { DashboardCard } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { DashboardCardColumnType } from "./DashboardCardColumnType";
import { DashboardCardItem } from "./DashboardCardItem";
import { DashboardCardPaginationProps } from "./DashboardCardPagination";

storiesOf("Organisms", module).add(
  "DashboardCard",
  withInfo({ propTablesExclude: [ContentCenterWrapper as any] })(() => {
    const items: DashboardCardItem[] = [
      {
        key: "0",
        columns: [
          { primaryText: "Soldier GD", secondaryText: "10th" },
          { imgUrl: process.env.PUBLIC_URL + "/images/entry/airforce.svg" },
          { primaryText: "Rs 10 pp" },
          { switchChecked: false },
        ],
      },
      {
        key: "1",
        columns: [
          { primaryText: "Soldier Tradesman", secondaryText: "10th" },
          { imgUrl: process.env.PUBLIC_URL + "/images/entry/army.svg" },
          { primaryText: "Rs 10 pp" },
          { switchChecked: true },
        ],
      },
      {
        key: "2",
        columns: [
          { primaryText: "Soldier Tradesman 8th Grade", secondaryText: "8th" },
          { imgUrl: process.env.PUBLIC_URL + "/images/entry/assamrifles.svg" },
          { primaryText: "Rs 10 pp" },
          { switchChecked: true },
        ],
      },
      {
        key: "3",
        columns: [
          { primaryText: "Soldier GD", secondaryText: "12th" },
          { imgUrl: process.env.PUBLIC_URL + "/images/entry/bsf.svg" },
          { primaryText: "Rs 10 pp" },
          { switchChecked: false },
        ],
      },
    ];

    const columnLabels = ["Category", "", "Cost Per Paper", ""];
    const columnTypes: DashboardCardColumnType[] = [
      "dual-line",
      "image",
      "single-line",
      "switch",
    ];

    const paginationProps: DashboardCardPaginationProps = {
      count: 60,
      onChangePage: action("onChangePage"),
      page: 0,
      rowsPerPage: 30,
    };

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
          paginationProps={paginationProps}
          paginationListItemType="entries"
        />
      </ContentCenterWrapper>
    );
  }),
);
