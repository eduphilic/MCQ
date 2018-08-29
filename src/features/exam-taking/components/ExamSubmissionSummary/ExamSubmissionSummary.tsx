import { whiteDark } from "css";
// import lodashOmit from "lodash.omit";
import lodashPick from "lodash.pick";
import React, { ReactNode, SFC } from "react";
import styled from "styled";

import { Typography } from "components/Typography";
import { Typography as TypographyV0 } from "componentsV0/Typography";
import { TypographyButton } from "componentsV0/TypographyButton";

export interface ExamStats {
  totalQuestionsCount: number;
  notAnsweredCount: number;
  markedForReviewCount: number;
  notVisitedCount: number;
  // timeTakenMinutes: number;
  answeredCount: number;
}

export type ExamSubmissionSummaryProps = ExamStats & {};

const examStatLabels: Record<keyof ExamStats, string> = {
  totalQuestionsCount: "Total Questions",
  notAnsweredCount: "Not Answered",
  markedForReviewCount: "Marked for Review",
  notVisitedCount: "Not Visited",
  // timeTakenMinutes: "Time Taken",
  answeredCount: "Answered",
};

export const ExamSubmissionSummary: SFC<ExamSubmissionSummaryProps> = props => {
  const { totalQuestionsCount, ...stats } = statsFromProps(props);
  // const rest = propsWithoutStats(props);

  return (
    <Wrapper>
      <TypographyV0 variant="examTitle">Submission</TypographyV0>

      <Typography variant="H5">
        Total number of Questions: <strong>{totalQuestionsCount}</strong>
      </Typography>

      {mapStats(stats, (key, value) => (
        <StatWrapper key={key}>
          <TypographyV0 variant="examTitle">{examStatLabels[key]}</TypographyV0>

          <TypographyV0 variant="examTitle">{value}</TypographyV0>
        </StatWrapper>
      ))}

      <QuestionAndButtonsWrapper
        questionNode={
          <TypographyV0
            variant="examTitle"
            muiTypographyProps={{ color: "error" }}
          >
            Are you sure you want to submit?
          </TypographyV0>
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
  text-align: center;

  .buttons {
    margin-top: 16px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    .buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .buttons > *:not(:last-child) {
      margin-bottom: 16px;
    }

    .buttons > * {
      width: 100%;
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    .buttons > *:not(:last-child) {
      margin-right: 16px;
    }
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
  stats: Omit<ExamStats, "totalQuestionsCount">,
  predicate: (key: keyof ExamStats, value: number) => ReactNode,
) =>
  Object.entries(stats).map(([key, value]) =>
    predicate(key as keyof ExamStats, value),
  );
