import React, { SFC } from "react";
import styled from "styled";

import { ExamAnswerSelectItem } from "./ExamAnswerSelectItem";

export interface ExamAnswerSelectProps {
  /**
   * Answer labels. They will be prepended with letters "a", "b", "c", etc.
   */
  answerLabels: string[];

  /**
   * The currently selected answer. If null, then none are selected.
   */
  selectedAnswerIndex: number | null;

  /**
   * Called when the user clicks an answer.
   */
  onChangeAnswerIndex: (selectedAnswerIndex: number) => any;
}

export const ExamAnswerSelect: SFC<ExamAnswerSelectProps> = props => {
  const { answerLabels, selectedAnswerIndex, onChangeAnswerIndex } = props;

  const answerNodes = answerLabels.map((label, index) => (
    <ExamAnswerSelectItem
      key={`${index}-${label}`}
      answerLabel={label}
      answerIndex={index}
      selected={index === selectedAnswerIndex}
      onClick={onChangeAnswerIndex}
    />
  ));

  return <Wrapper>{answerNodes}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.unit}px;
  }
`;
