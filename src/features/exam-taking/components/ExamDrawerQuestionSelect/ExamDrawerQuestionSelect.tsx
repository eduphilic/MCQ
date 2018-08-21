import React, { SFC } from "react";
import { connect } from "react-redux";
import { State } from "store";
import styled from "styled";
import { actions } from "../../actions";
import { IExamQuestion } from "../../models/IExamQuestion";
import { IExamQuestionCategory } from "../../models/IExamQuestionCategory";

import { Typography } from "componentsV0/Typography";
import { QuestionButton } from "./QuestionButton";

interface StateProps {
  questions: IExamQuestion[];
  questionCategories: IExamQuestionCategory[];

  /**
   * Whether to display the currently selected question. This should be false
   * when either the exam overview or exam submission screens are displayed.
   */
  showSelectedQuestionHighlight: boolean;

  currentQuestion: number;
}

interface DispatchProps {
  navigateToQuestion: (questionIndex: number) => any;
}

// tslint:disable-next-line:no-empty-interface
interface OwnProps {}

export type ExamDrawerQuestionSelectProps = StateProps &
  DispatchProps &
  OwnProps;

/**
 * Provides buttons for navigating among the exam questions. It separates the
 * buttons into groups by category. It displays the current status of the
 * question (visited/answered/etc...).
 */
const ExamDrawerQuestionSelect: SFC<ExamDrawerQuestionSelectProps> = props => {
  const {
    questions,
    questionCategories,
    showSelectedQuestionHighlight,
    currentQuestion,
    navigateToQuestion,
  } = props;

  let nextQuestion = 0;
  const sections = questionCategories.map(c => {
    const node = (
      // TODO: Use localized string here.
      <Section key={c.title.en}>
        {/* TODO: Use localized string here. */}
        <Typography variant="examDrawerSubtitle">{c.title.en}</Typography>
        <QuestionButtonWrapper>
          {questions
            .slice(nextQuestion, nextQuestion + c.questionCount)
            .map((q, index) => (
              <QuestionButton
                // TODO: Use localized string here.
                key={`${c.title.en}-${index}`}
                status={q.status}
                selected={
                  showSelectedQuestionHighlight &&
                  currentQuestion === nextQuestion + index
                }
                questionIndex={index + nextQuestion}
                onNavigate={navigateToQuestion}
              >
                <Typography style={{ color: "inherit" }}>
                  {index + 1}
                </Typography>
              </QuestionButton>
            ))}
        </QuestionButtonWrapper>
      </Section>
    );

    nextQuestion += c.questionCount;
    return node;
  });

  return <Wrapper>{sections}</Wrapper>;
};

const ExamDrawerQuestionSelectContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  state => ({
    questions: state.examTaking.questions!,
    questionCategories: state.examTaking.questionCategories!,
    showSelectedQuestionHighlight:
      !state.examTaking.showOverviewScreen &&
      !state.examTaking.showSubmissionSummaryScreen,
    currentQuestion: state.examTaking.currentQuestion,
  }),
  {
    navigateToQuestion: actions.navigateToQuestion,
  },
)(ExamDrawerQuestionSelect);

export { ExamDrawerQuestionSelectContainer as ExamDrawerQuestionSelect };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
`;

const Section = styled.div`
  & > * {
    margin-bottom: 8px;
  }
`;

const QuestionButtonWrapper = styled.div`
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
  width: 100%;
`;
