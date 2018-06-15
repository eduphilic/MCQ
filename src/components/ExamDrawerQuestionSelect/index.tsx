import {
  examQuestionStatusAnswered,
  examQuestionStatusMarkedForReview,
  examQuestionStatusNotAnswered,
  examQuestionStatusNotVisited,
} from "common/css/colors";
import { ExamQuestionNavigationState } from "common/types/ExamQuestionNavigationState";
import React, { Component } from "react";
import styled, { withProps } from "styled";

import { Typography } from "components/Typography";

type QuestionStatusProp = Pick<
  ExamQuestionNavigationState["questions"][0],
  "status"
>;

export interface ExamDrawerQuestionSelectProps {
  navigationState: ExamQuestionNavigationState;
}

export class ExamDrawerQuestionSelect extends Component<
  ExamDrawerQuestionSelectProps
> {
  render() {
    const { navigationState } = this.props;

    let nextQuestion = 0;
    const sections = navigationState.categories.map(c => {
      const node = (
        <Section key={c.title}>
          <Typography variant="examDrawerSubtitle">{c.title}</Typography>

          <QuestionButtonWrapper>
            {navigationState.questions
              .slice(nextQuestion, nextQuestion + c.questionCount)
              .map((q, index) => (
                <QuestionButton key={`${c.title}-${index}`} status={q.status}>
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
  }
}

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

const statusColorMap: Record<
  QuestionStatusProp["status"],
  { color: string; backgroundColor: string }
> = {
  answered: { color: "#fff", backgroundColor: examQuestionStatusAnswered },
  "not-answered": {
    color: "#000",
    backgroundColor: examQuestionStatusNotAnswered,
  },
  "marked-for-review": {
    color: "#000",
    backgroundColor: examQuestionStatusMarkedForReview,
  },
  "not-visited": {
    color: "#000",
    backgroundColor: examQuestionStatusNotVisited,
  },
};

const QuestionButton = withProps<QuestionStatusProp>()(styled.button)`
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0 4px;
  margin-bottom: 8px;
  color: ${({ status }) => statusColorMap[status].color};
  background-color: ${({ status }) => statusColorMap[status].backgroundColor};
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
`;
