import React, { Component } from "react";
import styled from "styled";

import { ExamNavigationStorePlaceholderConsumer } from "components/ExamNavigationStorePlaceholder";
import { Typography } from "components/Typography";
import { QuestionButton } from "./QuestionButton";

// tslint:disable-next-line:no-empty-interface
export interface ExamDrawerQuestionSelectProps {}

export class ExamDrawerQuestionSelect extends Component<
  ExamDrawerQuestionSelectProps
> {
  render() {
    return (
      <ExamNavigationStorePlaceholderConsumer>
        {store => {
          let nextQuestion = 0;
          const sections = store.questionCategories.map(c => {
            const node = (
              <Section key={c.title}>
                <Typography variant="examDrawerSubtitle">{c.title}</Typography>
                <QuestionButtonWrapper>
                  {store.questions
                    .slice(nextQuestion, nextQuestion + c.questionCount)
                    .map((q, index) => (
                      <QuestionButton
                        key={`${c.title}-${index}`}
                        status={q.status}
                        selected={
                          !store.showOverviewPage &&
                          store.currentQuestion === nextQuestion + index
                        }
                        questionIndex={index + nextQuestion}
                        onNavigate={store.navigateToQuestion}
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
        }}
      </ExamNavigationStorePlaceholderConsumer>
    );
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
