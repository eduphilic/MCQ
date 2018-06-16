import { examMarkingsInfo } from "common/structures/examMarkingsInfo";
import { ExamMarkingsInfo } from "common/types/ExamMarkingsInfo";
import React, { SFC } from "react";
import styled from "styled";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import { DashboardColumnContainer } from "components/DashboardColumnContainer";
import { Typography } from "components/Typography";

const titles = [
  "Total Marks",
  "Passing Marks",
  "Total Time",
  "Total Questions",
  "Marks for correct answer",
  "Marks for wrong answer",
];

const stats: (keyof ExamMarkingsInfo)[] = [
  "totalMarks",
  "passingMarks",
  "totalTimeMinutes",
  "questionsCount",
  "marksPerCorrectAnswer",
  "marksPerIncorrectAnswer",
];

const titleNodes = titles.map(t => (
  <Typography key={t} variant="buttonBold">
    {t}
  </Typography>
));

// tslint:disable-next-line:no-empty-interface
export interface ExamOverviewMarkingsProps {}

export const ExamOverviewMarkings: SFC<ExamOverviewMarkingsProps> = props => {
  const {} = props;

  const statNodes = stats.map(s => {
    let stat: string | number;

    switch (s) {
      case "passingMarks":
        stat = `${(examMarkingsInfo.passingMarks /
          examMarkingsInfo.totalMarks) *
          100}% (${examMarkingsInfo.passingMarks})`;
        break;
      case "totalTimeMinutes":
        stat = `${examMarkingsInfo.totalMarks} minutes`;
        break;
      case "questionsCount":
        stat = `${examMarkingsInfo.questionsCount} Questions`;
        break;
      case "marksPerCorrectAnswer":
        stat = `+${examMarkingsInfo.marksPerCorrectAnswer} marks`;
        break;
      case "marksPerIncorrectAnswer":
        stat = `-${examMarkingsInfo.marksPerIncorrectAnswer} marks`;
        break;
      default:
        stat = examMarkingsInfo[s];
    }

    return <TypographySameHeight key={s}>{stat}</TypographySameHeight>;
  });

  const nodes = [...titleNodes, ...statNodes];

  return (
    <Card>
      <CardHeader
        title={<Typography variant="cardTitle">Markings</Typography>}
      />
      <CardContent>
        <DashboardColumnContainer>{nodes}</DashboardColumnContainer>
      </CardContent>
    </Card>
  );
};

const TypographySameHeight = styled(Typography)`
  height: 24px;
`;
