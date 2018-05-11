import React, { SFC } from "react";

import Switch from "material-ui/Switch";
import Tooltip from "material-ui/Tooltip";

import { Typography } from "../../atoms/Typography";
import { ResponsiveToolbarTypographyButton } from "../../molecules/ResponsiveToolbarTypographyButton";
import { DashboardCardItemColumn } from "./DashboardCardItemColumn";
import { DashboardCardModeApi } from "./DashboardCardModeContext";

type ColumnItemComponent = SFC<{
  itemColumn: DashboardCardItemColumn;
  mode: DashboardCardModeApi["state"]["mode"];
}>;

export const ColumnItemDualLine: ColumnItemComponent = ({ itemColumn }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Typography>{itemColumn.primaryText}</Typography>
    <Typography muiTypographyProps={{ variant: "caption" }}>
      {itemColumn.secondaryText}
    </Typography>
  </div>
);

export const ColumnItemImage: ColumnItemComponent = ({ itemColumn }) => (
  <img
    style={{ display: "block", height: 64, margin: "4px 0" }}
    src={itemColumn.imgUrl}
  />
);

export const ColumnItemSingleLine: ColumnItemComponent = ({ itemColumn }) => (
  <Typography>{itemColumn.primaryText}</Typography>
);

export const ColumnItemSwitch: ColumnItemComponent = ({ itemColumn, mode }) => {
  const component = (
    <Switch
      checked={Boolean(itemColumn.switchChecked)}
      onClick={event => {
        event.stopPropagation();
      }}
      onChange={event => {
        if (!itemColumn.switchOnChange) return;
        itemColumn.switchOnChange(event.target.checked);
      }}
      disabled={mode !== "edit"}
      color="primary"
    />
  );

  return itemColumn.switchTooltipTitle ? (
    <Tooltip title={itemColumn.switchTooltipTitle}>{component}</Tooltip>
  ) : (
    component
  );
};

export const ColumnItemButton: ColumnItemComponent = ({ itemColumn }) => (
  <ResponsiveToolbarTypographyButton
    iconNode={itemColumn.buttonIconNode}
    tooltipTitle={itemColumn.buttonTooltipTitle}
  >
    {itemColumn.primaryText}
  </ResponsiveToolbarTypographyButton>
);