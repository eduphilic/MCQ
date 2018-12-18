import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import TextField from "@material-ui/core/TextField";

import { Button } from "../Button";
import { Grid } from "../Grid";
import { DashboardCard } from "./DashboardCard";
import { DashboardCardColumnType } from "./DashboardCardColumnType";
import { DashboardCardItem } from "./DashboardCardItem";
import { DashboardCardPaginationProps } from "./DashboardCardPagination";

const stories = storiesOf("DashboardCard", module);

stories.add("default", () => {
  const items: DashboardCardItem[] = [
    {
      key: "0",
      columns: [
        { primaryText: "Soldier GD", secondaryText: "10th" },
        { imgUrl: "https://placekitten.com/128/128" },
        { primaryText: "Rs 10 pp" },
        { switchChecked: false },
      ],
    },
    {
      key: "1",
      columns: [
        { primaryText: "Soldier Tradesman", secondaryText: "10th" },
        { imgUrl: "https://placekitten.com/128/128" },
        { primaryText: "Rs 10 pp" },
        { switchChecked: true },
      ],
    },
    {
      key: "2",
      columns: [
        {
          primaryText: "Soldier Tradesman 8th Grade",
          secondaryText: "8th",
        },
        {
          imgUrl: "https://placekitten.com/128/128",
        },
        { primaryText: "Rs 10 pp" },
        { switchChecked: true },
      ],
    },
    {
      key: "3",
      columns: [
        { primaryText: "Soldier GD", secondaryText: "12th" },
        { imgUrl: "https://placekitten.com/128/128" },
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
    <Grid storybookContainer>
      <Grid item xs={12}>
        <DashboardCard
          items={items}
          title="Army Entry"
          titleSiblingNode={<Button>Some Sibling Component</Button>}
          editCaptionText="Click to Edit Entry"
          columnLabels={columnLabels}
          columnTypes={columnTypes}
          onItemEditClick={action("onItemEditClick")}
          onRequestDeleteClick={action("onRequestDeleteClick")}
          paginationProps={paginationProps}
          paginationListItemType="entries"
          additionalActionNode={
            <TextField
              name="textField"
              label="A Custom Action Node"
              placeholder="Custom action node's contents..."
            />
          }
        />
      </Grid>
    </Grid>
  );
});
