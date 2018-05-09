import React, { Component } from "react";
import styled from "styled";

import Checkbox from "material-ui/Checkbox";
import Table, { TableCell, TableHead, TableRow } from "material-ui/Table";

import { Typography } from "../../atoms/Typography";
import { DashboardCardModeConsumer } from "./DashboardCardModeContext";

export interface DashboardCardTableProps {
  /**
   * Render checkboxes and placeholder padding for checkboxes.
   */
  showCheckboxes: boolean;

  /**
   * Column labels.
   */
  columnLabels: string[];
}

export class DashboardCardTable extends Component<DashboardCardTableProps> {
  render() {
    const { showCheckboxes, columnLabels } = this.props;

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
                  <TableCell key={index}>
                    <Typography variant="tableHeadCell">{label}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* */}
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
