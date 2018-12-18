import { css, styled } from "@join-uniform/theme";
import React, { Component, FC, ReactNode } from "react";

import {
  DashboardTableRow,
  DashboardTableRowProps,
} from "../DashboardTableRow";
import { Hidden } from "../Hidden";
import {
  Checkbox,
  CheckboxProps,
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "../muiComponents";

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

export type DashboardCardTableProps = {
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
};

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
          <Table
            // If there are multiple tables on one page, attempt to keep there
            // column widths the same.
            css={css`
              table-layout: fixed;
            `}
          >
            {/* Table Header */}
            <TableHead>
              <TableRow suppressHydrationWarning>
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
                  <Hidden
                    key={index}
                    xsDown={columnTypes[index] === "image"}
                    implementation="js"
                  >
                    <UnpaddedTableCell
                      // Make first cell the largest. This is to make multiple
                      // tables on one page have the same column sizings.
                      css={
                        index === 0
                          ? css`
                              width: 50%;
                            `
                          : undefined
                      }
                    >
                      <Typography
                        variant="subtitle2"
                        // Add left padding for alignment with Toolbar Button.
                        css={
                          columnTypes[index] === "button"
                            ? css`
                                padding-left: 32px;
                              `
                            : undefined
                        }
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
                  suppressHydrationWarning
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
                        implementation="js"
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
