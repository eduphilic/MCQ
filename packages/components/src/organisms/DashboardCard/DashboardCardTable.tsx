import React, { Component, ReactNode } from "react";
import styled, { withProps } from "styled";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import withWidth, {
  isWidthDown,
  WithWidthProps,
} from "@material-ui/core/withWidth";

import { DashboardTableRow } from "../../atoms/DashboardTableRow";
import { Typography } from "../../atoms/Typography";
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
import { DashboardCardItemColumn } from "./DashboardCardItemColumn";
import {
  DashboardCardModeApi,
  DashboardCardModeConsumer,
} from "./DashboardCardModeContext";

export interface DashboardCardTableProps extends WithWidthProps {
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

class DashboardCardTableBase extends Component<DashboardCardTableProps> {
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

  generateRowCard = (
    columns: DashboardCardItemColumn[],
    columnTypes: DashboardCardColumnType[],
    columnLabels: string[],
    mode: string,
  ) => {
    const cardMediaColumnIndex = columnTypes.findIndex(c => c === "image");
    const cardMedia =
      cardMediaColumnIndex !== -1 ? (
        <FlatCardMedia image={columns[cardMediaColumnIndex].imgUrl} />
      ) : null;
    const { width } = this.props;

    return (
      <FlatCard>
        {!(isWidthDown("xs", width) && mode === "deletion") && cardMedia}

        <CardContent style={{ flex: 1 }}>
          {columns.map((itemColumn, columnIndex) => {
            if (columnIndex === cardMediaColumnIndex) return null;

            const ItemColumnComponent = this.getColumnComponent(
              columnTypes[columnIndex],
            );

            return (
              <FlatCardItemWrapper key={columnIndex}>
                <Typography variant="tableHeadCell">
                  {columnLabels[columnIndex] && (
                    <>{columnLabels[columnIndex]}:&nbsp;</>
                  )}
                </Typography>
                <ItemColumnComponent
                  itemColumn={itemColumn}
                  mode={mode as any}
                />
              </FlatCardItemWrapper>
            );
          })}
        </CardContent>
      </FlatCard>
    );
  };

  render() {
    const {
      showCheckboxes,
      columnTypes,
      columnLabels,
      items,
      bottomPaginationNode,
      width,
    } = this.props;

    return (
      <DashboardCardModeConsumer>
        {api => (
          <Table>
            {/* Table Header, hidden on mobile */}
            {!isWidthDown("sm", width) && (
              <TableHead>
                <TableRow>
                  {/* Optional checkbox (for cards which have delete option). */}
                  {showCheckboxes &&
                    api.state.mode === "deletion" && (
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
                    <UnpaddedTableCell key={index}>
                      <Typography
                        variant="tableHeadCell"
                        padLeftToolbarButton={columnTypes[index] === "button"}
                      >
                        {label}
                      </Typography>
                    </UnpaddedTableCell>
                  ))}
                </TableRow>
              </TableHead>
            )}

            {/* Table Contents*/}
            <TableBody>
              {items.map((item, index) => (
                <ClickableTableRow
                  key={item.key}
                  selected={api.state.selected[index]}
                  onClick={() => api.actions.clickItem(item.key)}
                  mode={api.state.mode}
                >
                  {showCheckboxes &&
                    api.state.mode === "deletion" && (
                      <UnpaddedTableCell padding="checkbox">
                        {api.state.mode === "deletion" && (
                          <RedCheckbox checked={api.state.selected[index]} />
                        )}
                      </UnpaddedTableCell>
                    )}

                  {/* Render column item using required component type. Hidden on mobile. */}
                  {!isWidthDown("sm", width) &&
                    item.columns.map((itemColumn, columnIndex) => {
                      const ItemColumnComponent = this.getColumnComponent(
                        columnTypes[columnIndex],
                      );

                      return (
                        <UnpaddedTableCell key={`${item.key}-${columnIndex}`}>
                          <ItemColumnComponent
                            itemColumn={itemColumn}
                            mode={api.state.mode}
                          />
                        </UnpaddedTableCell>
                      );
                    })}

                  {/* Render column items in a card on mobile. */}
                  {isWidthDown("sm", width) && (
                    <UnpaddedTableCell>
                      {this.generateRowCard(
                        item.columns,
                        columnTypes,
                        columnLabels,
                        api.state.mode,
                      )}
                    </UnpaddedTableCell>
                  )}
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

export const DashboardCardTable = withWidth()(DashboardCardTableBase);

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

const FlatCard = styled(Card).attrs({
  elevation: 0,
})`
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const FlatCardMedia = styled(CardMedia)`
  width: 100px;
  height: 100px;
`;

const FlatCardItemWrapper = styled.div`
  display: flex;
  margin: 8px 0;

  > *:first-child {
    flex: 1;
    align-self: center;
  }

  > *:nth-child(2) {
    align-self: center;
  }
`;
