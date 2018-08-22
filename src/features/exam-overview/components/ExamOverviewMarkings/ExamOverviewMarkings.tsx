import React, { SFC } from "react";
import { connect } from "react-redux";
import { State } from "store";
import styled from "styled";
import { IExamMetaMarkings } from "../../models/IExamMetaMarkings";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import { DashboardColumnContainer } from "componentsV0/DashboardColumnContainer";
import { Typography } from "componentsV0/Typography";

const titles = [
  "Total Marks",
  "Passing Marks",
  "Total Time",
  "Total Questions",
  "Marks for correct answer",
  "Marks for wrong answer",
];

const stats: (keyof IExamMetaMarkings)[] = [
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

interface StateProps {
  markings: IExamMetaMarkings;
}

interface OwnProps {
  /**
   * Render without wrapping the contents in a Material UI Card component.
   */
  noCard?: boolean;
}

export type ExamOverviewMarkingsProps = StateProps & OwnProps;

const ExamOverviewMarkings: SFC<ExamOverviewMarkingsProps> = props => {
  const { markings, noCard } = props;

  const statNodes = stats.map(s => {
    let stat: string | number;

    switch (s) {
      case "passingMarks":
        stat = `${(markings.passingMarks / markings.totalMarks) * 100}% (${
          markings.passingMarks
        })`;
        break;
      case "totalTimeMinutes":
        stat = `${markings.totalMarks} minutes`;
        break;
      case "questionsCount":
        stat = `${markings.questionsCount} Questions`;
        break;
      case "marksPerCorrectAnswer":
        stat = `+${markings.marksPerCorrectAnswer} marks`;
        break;
      case "marksPerIncorrectAnswer":
        stat = `-${markings.marksPerIncorrectAnswer} marks`;
        break;
      default:
        stat = markings[s];
    }

    return <TypographySameHeight key={s}>{stat}</TypographySameHeight>;
  });

  const nodes = [...titleNodes, ...statNodes];

  const contents = (
    <CardContent>
      <DashboardColumnContainer interlaced={noCard}>
        {nodes}
      </DashboardColumnContainer>
    </CardContent>
  );

  if (noCard) return contents;

  return (
    <Card>
      <CardHeader
        title={<Typography variant="cardTitle">Markings</Typography>}
      />
      {contents}
    </Card>
  );
};

const ExamOverviewMarkingsContainer = connect<StateProps, {}, OwnProps, State>(
  (state: State): StateProps => ({
    markings: state.examOverview.examMeta.markings,
  }),
)(ExamOverviewMarkings);

export { ExamOverviewMarkingsContainer as ExamOverviewMarkings };

const TypographySameHeight = styled(Typography)`
  height: 24px;
`;
