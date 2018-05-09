import React, { Component } from "react";
import styled, { withProps } from "styled";

import Checkbox from "material-ui/Checkbox";
import Hidden from "material-ui/Hidden";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "material-ui/Table";

import { DashboardTableRow } from "../../atoms/DashboardTableRow";
import { Typography } from "../../atoms/Typography";
import {
  ColumnItemButton,
  ColumnItemDualLine,
  ColumnItemImage,
  ColumnItemSingleLine,
  ColumnItemSwitch,
} from "./DashboardCardColumnComponents";
import { DashboardCardColumnType } from "./DashboardCardColumnType";
import { DashboardCardItem } from "./DashboardCardItem";
import {
  DashboardCardModeApi,
  DashboardCardModeConsumer,
} from "./DashboardCardModeContext";

export interface DashboardCardTableProps {
  /**
   * Render checkboxes and placeholder padding for checkboxes.
   */
  showCheckboxes: boolean;

  /**
   * Column labels.
   */
  columnLabels: string[];

  /**
   * Column types.
   */
  columnTypes: DashboardCardColumnType[];

  /**
   * Items.
   */
  items: DashboardCardItem[];
}

export class DashboardCardTable extends Component<DashboardCardTableProps> {
  constructor(props: DashboardCardTableProps) {
    super(props);

    if (props.columnLabels.length !== props.columnTypes.length) {
      throw new Error("Expected same length columnLabels and columnTypes");
    }
  }

  getColumnComponent = (type: DashboardCardColumnType) => {
    switch (type) {
      case "dual-line":
        return ColumnItemDualLine;
      case "image":
        return ColumnItemImage;
      case "single-line":
        return ColumnItemSingleLine;
      case "switch":
        return ColumnItemSwitch;
      case "button":
        return ColumnItemButton;
      default:
        throw new Error(`Unknown column type: ${type}`);
    }
  };

  render() {
    const { showCheckboxes, columnTypes, columnLabels, items } = this.props;

    return (
      <DashboardCardModeConsumer>
        {api => (
          <Table>
            {/* Table Header */}
            <TableHead>
              <TableRow>
                {/* Optional checkbox (for cards which have delete option). */}
                {showCheckboxes && (
                  <CheckboxWidthTableCell>
                    {api.state.mode === "deletion" && (
                      <RedCheckbox
                        indeterminate={api.actions.getIsIndeterminate()}
                        checked={api.actions.getIsAllSelected()}
                        onChange={api.actions.toggleSelectAll}
                      />
                    )}
                  </CheckboxWidthTableCell>
                )}

                {/* Column Labels */}
                {columnLabels.map((label, index) => (
                  <Hidden key={index} xsDown={columnTypes[index] === "image"}>
                    <UnpaddedTableCell>
                      <Typography variant="tableHeadCell">{label}</Typography>
                    </UnpaddedTableCell>
                  </Hidden>
                ))}
              </TableRow>
            </TableHead>

            {/* Table Contents*/}
            <TableBody>
              {items.map((item, index) => (
                <ClickableTableRow
                  key={item.key}
                  selected={api.state.selected[index]}
                  onClick={() => api.actions.clickItem(item.key)}
                  mode={api.state.mode}
                >
                  {showCheckboxes && (
                    <UnpaddedTableCell padding="checkbox">
                      {api.state.mode === "deletion" && (
                        <RedCheckbox checked={api.state.selected[index]} />
                      )}
                    </UnpaddedTableCell>
                  )}

                  {/* Render column item using required component type. */}
                  {item.columns.map((itemColumn, columnIndex) => {
                    const ItemColumnComponent = this.getColumnComponent(
                      columnTypes[columnIndex],
                    );

                    return (
                      <Hidden
                        key={`${item.key}-${columnIndex}`}
                        xsDown={columnTypes[columnIndex] === "image"}
                      >
                        <UnpaddedTableCell>
                          <ItemColumnComponent
                            itemColumn={itemColumn}
                            mode={api.state.mode}
                          />
                        </UnpaddedTableCell>
                      </Hidden>
                    );
                  })}
                </ClickableTableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DashboardCardModeConsumer>
    );
  }
}

const CheckboxWidthTableCell = styled(TableCell).attrs({ padding: "checkbox" })`
  width: 72px;
`;

const RedCheckbox = styled(Checkbox).attrs({
  classes: {
    checked: "checked",
  },
})`
  &.checked {
    color: #e10050;
  }
`;

const UnpaddedTableCell = styled(TableCell)`
  &:not(:first-child) {
    padding-left: 0;
    padding-right: 0;
  }
`;

type ModeProp = Pick<DashboardCardModeApi["state"], "mode">;

const ClickableTableRow = withProps<ModeProp>()(styled(DashboardTableRow))`
  cursor: ${({ mode }) => (mode !== "display" ? "pointer" : "inherit")};
`;
