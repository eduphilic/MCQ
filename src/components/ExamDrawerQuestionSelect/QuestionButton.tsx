import {
  examQuestionStatusAnswered,
  examQuestionStatusMarkedForReview,
  examQuestionStatusNotAnswered,
  examQuestionStatusNotVisited,
  examQuestionStatusSelected,
} from "common/css/colors";
import React, { Component } from "react";
import styled from "styled";

import { Question } from "components/ExamNavigationStorePlaceholder";

export interface QuestionButtonProps
  extends React.ClassAttributes<HTMLButtonElement> {
  className?: string;
  status: Question["status"];
  selected: boolean;
  questionIndex: number;
  onNavigate: (questionIndex: number) => any;
}

class QuestionButtonBase extends Component<QuestionButtonProps> {
  private handleClick = () => {
    this.props.onNavigate(this.props.questionIndex);
    /* tslint:disable-next-line:no-console */
    console.log("this.props.questionIndex", this.props.questionIndex);
  };

  render() {
    const { className, children } = this.props;

    return (
      <button className={className} onClick={this.handleClick}>
        {children}
      </button>
    );
  }
}

const statusColorMap: Record<
  QuestionButtonProps["status"],
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

export const QuestionButton = styled(QuestionButtonBase)`
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0 4px;
  margin-bottom: 8px;
  color: ${({ status }) => statusColorMap[status].color};
  background-color: ${({ status }) => statusColorMap[status].backgroundColor};
  border: ${({ selected }) =>
    selected ? `2px solid ${examQuestionStatusSelected}` : "none"};
  border-radius: 50%;
  outline: none;
  cursor: pointer;
`;
