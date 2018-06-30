import { examBluePrintInfo } from "common/structures/examBluePrintInfo";
import React, { SFC } from "react";
import styled from "styled";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { DashboardTableRow } from "components/DashboardTableRow";
import { Typography } from "components/Typography";

export interface ExamOverviewBluePrintProps {
  /**
   * Render the component without wrapping it with a Material UI Card component.
   *
   * Also reduce the table cell padding to prevent horizontal overflow.
   */
  noCard?: boolean;
}

export const ExamOverviewBluePrint: SFC<ExamOverviewBluePrintProps> = props => {
  const { noCard } = props;

  const contents = (
    <Table>
      <TableHead>
        <TableRow>
          {["Subjects Covered", "No. of Questions", "Marks Allocated"].map(
            t => (
              <TableCellWithResponsivePadding key={t} noCard={noCard}>
                <Typography variant="tableHeadCell">{t}</Typography>
              </TableCellWithResponsivePadding>
            ),
          )}
        </TableRow>
      </TableHead>

      <TableBody>
        {examBluePrintInfo.map(e => (
          <DashboardTableRow key={e.id}>
            <TableCellWithResponsivePadding noCard={noCard}>
              {/* TODO: Choose correct localization string. */}
              {e.title.en}
            </TableCellWithResponsivePadding>
            <TableCellWithResponsivePadding noCard={noCard}>
              {e.questionCount}
            </TableCellWithResponsivePadding>
            <TableCellWithResponsivePadding noCard={noCard}>
              {e.marksAllocated}
            </TableCellWithResponsivePadding>
          </DashboardTableRow>
        ))}
      </TableBody>
    </Table>
  );

  if (noCard) return contents;

  return (
    <CardFlexGrow>
      <CardHeader
        title={<Typography variant="cardTitle">Blue Print</Typography>}
      />
      {contents}
    </CardFlexGrow>
  );
};

const CardFlexGrow = styled(Card)`
  flex: 1;
`;

const TableCellWithResponsivePadding: SFC<
  ExamOverviewBluePrintProps
> = props => (
  <TableCell style={{ paddingRight: 0 }}>{props.children}</TableCell>
);
