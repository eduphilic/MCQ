import { whiteDark } from "common/css/colors";
// import lodashOmit from "lodash.omit";
import lodashPick from "lodash.pick";
import React, { ReactNode, SFC } from "react";
import styled from "styled";

import { Typography } from "components/Typography";
import { TypographyButton } from "components/TypographyButton";

export interface ExamStats {
  totalQuestionsCount: number;
  notAnsweredCount: number;
  markedForReviewCount: number;
  notVisitedCount: number;
  timeTakenMinutes: number;
  answeredCount: number;
}

export type ExamSubmissionSummaryProps = ExamStats & {};

const examStatLabels: Record<keyof ExamStats, string> = {
  totalQuestionsCount: "Total Questions",
  notAnsweredCount: "Not Answered",
  markedForReviewCount: "Marked for Review",
  notVisitedCount: "Not Visited",
  timeTakenMinutes: "Time Taken",
  answeredCount: "Answered",
};

export const ExamSubmissionSummary: SFC<ExamSubmissionSummaryProps> = props => {
  const stats = statsFromProps(props);
  // const rest = propsWithoutStats(props);

  return (
    <Wrapper>
      <Typography variant="examTitle">Submission</Typography>

      {mapStats(stats, (key, value) => (
        <StatWrapper key={key}>
          <Typography variant="examTitle">{examStatLabels[key]}</Typography>

          <Typography variant="examTitle">{value}</Typography>
        </StatWrapper>
      ))}

      <QuestionAndButtonsWrapper
        questionNode={
          <Typography
            variant="examTitle"
            muiTypographyProps={{ color: "error" }}
          >
            Are you sure you want to submit?
          </Typography>
        }
        buttonsNode={
          <>
            <TypographyButton>Submit</TypographyButton>
            <TypographyButton>Attempt Balance</TypographyButton>
          </>
        }
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > * {
    margin-bottom: ${({ theme }) => theme.spacing.unit * 2}px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 8px;
    padding-top: 16px;
  }
`;

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.unit}px;
  margin-right: ${({ theme }) => theme.spacing.unit}px;
  background-color: ${whiteDark};

  > *:first-child {
    margin-bottom: ${({ theme }) => theme.spacing.unit}px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: inline-flex;
    width: calc(25% - ${({ theme }) => theme.spacing.unit}px);
  }
`;

const QuestionAndButtonsWrapper = styled<{
  className?: string;
  children?: never;
  questionNode: ReactNode;
  buttonsNode: ReactNode;
}>(({ className, questionNode, buttonsNode }) => (
  <div className={className}>
    {questionNode}

    <div className="buttons">{buttonsNode}</div>
  </div>
))`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 16px;

  .buttons {
    margin-top: 16px;
  }

  .buttons > *:not(:last-child) {
    margin-right: 16px;
  }
`;

const statKeys = Object.getOwnPropertyNames(examStatLabels);

const statsFromProps = (props: ExamSubmissionSummaryProps): ExamStats =>
  lodashPick(props, statKeys) as ExamStats;

// const propsWithoutStats = (
//   props: ExamSubmissionSummaryProps,
// ): Omit<ExamSubmissionSummaryProps, keyof ExamStats> & {
//   children?: ReactNode;
// } => lodashOmit(props, statKeys);

const mapStats = (
  stats: ExamStats,
  predicate: (key: keyof ExamStats, value: number) => ReactNode,
) =>
  Object.entries(stats).map(([key, value]) =>
    predicate(key as keyof ExamStats, value),
  );
