import { ExamQuestionNavigationState } from "common/types/ExamQuestionNavigationState";
import React, { Component } from "react";
import styled from "styled";

import { Typography } from "components/Typography";

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
              .map((_q, index) => (
                <QuestionButton key={`${c.title}-${index}`}>
                  {index + 1}
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

const QuestionButton = styled.button`
  width: 32px;
  height: 32px;
  margin: 0 4px;
  margin-bottom: 8px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: green;
  outline: none;
  cursor: pointer;
`;
