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
              <TableCell key={t}>
                <Typography variant="tableHeadCell">{t}</Typography>
              </TableCell>
            ),
          )}
        </TableRow>
      </TableHead>

      <TableBody>
        {examBluePrintInfo.map(e => (
          <DashboardTableRow key={e.id}>
            <TableCell>{e.subjectTitle}</TableCell>
            <TableCell>{e.questionCount}</TableCell>
            <TableCell>{e.marksAllocated}</TableCell>
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
