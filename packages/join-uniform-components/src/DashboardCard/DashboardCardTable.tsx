import { styled } from "@join-uniform/theme";
import React, { Component, FC, ReactNode } from "react";

import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import Hidden from "@material-ui/core/Hidden";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import {
  DashboardTableRow,
  DashboardTableRowProps,
} from "../DashboardTableRow";
// import { Typography } from "componentsV0/Typography";
import {
  ColumnItemButton,
  ColumnItemDualLine,
  ColumnItemImage,
  ColumnItemProfile,
  ColumnItemSingleLine,
  ColumnItemSwitch,
} from "./DashboardCardColumnComponents";
import { DashboardCardColumnType } from "./DashboardCardColumnType";
import { DashboardCardItem } from "./DashboardCardItem";
import {
  DashboardCardModeApi,
  DashboardCardModeConsumer,
} from "./DashboardCardModeContext";

const Typography: any = () => <div>T</div>;

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

  /**
   * Optional bottom pagination node.
   */
  bottomPaginationNode?: ReactNode;
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
      case "profile":
        return ColumnItemProfile;
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
    const {
      showCheckboxes,
      columnTypes,
      columnLabels,
      items,
      bottomPaginationNode,
    } = this.props;

    return (
      <DashboardCardModeConsumer>
        {api => (
          <Table>
            {/* Table Header */}
            <TableHead>
              <TableRow>
                {/* Optional checkbox (for cards which have delete option). */}
                {showCheckboxes && api.state.mode === "deletion" && (
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
                      <Typography
                        variant="tableHeadCell"
                        padLeftToolbarButton={columnTypes[index] === "button"}
                      >
                        {label}
                      </Typography>
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
                  {showCheckboxes && api.state.mode === "deletion" && (
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

            {/* Optional bottom pagination control. */}
            {bottomPaginationNode && (
              <TableFooter>
                <TableRow>{bottomPaginationNode}</TableRow>
              </TableFooter>
            )}
          </Table>
        )}
      </DashboardCardModeConsumer>
    );
  }
}

const CheckboxWidthTableCell = styled(TableCell as FC<TableCellProps>).attrs(
  () => ({
    padding: "checkbox",
  }),
)`
  width: 72px;
`;

const RedCheckbox = styled(Checkbox as FC<CheckboxProps>).attrs(() => ({
  classes: {
    checked: "checked",
  },
}))`
  &.checked {
    color: #e10050;
  }
`;

const UnpaddedTableCell = styled(TableCell as FC<TableCellProps>)`
  &:not(:first-child) {
    padding-left: 0;
    padding-right: 0;
  }
`;

type ModeProp = Pick<DashboardCardModeApi["state"], "mode">;

const ClickableTableRow = styled((props: DashboardTableRowProps & ModeProp) => {
  const { mode, ...rest } = props;
  return <DashboardTableRow {...rest} />;
})`
  cursor: ${({ mode }) => (mode !== "display" ? "pointer" : "inherit")};
`;
