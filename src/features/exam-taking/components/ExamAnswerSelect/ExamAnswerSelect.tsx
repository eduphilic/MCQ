import React, { SFC } from "react";
import styled from "styled";

import {
  ExamAnswerSelectItem,
  ExamAnswerSelectItemProps,
} from "./ExamAnswerSelectItem";

export type ExamAnswerSelectProps = {
  /**
   * Answer labels. They will be prepended with letters "a", "b", "c", etc.
   */
  answerLabels: string[];

  /**
   * The currently selected answer. If null, then none are selected.
   */
  selectedAnswerIndex: number | null;

  /**
   * The correct answer index. If provided, it will render the user's selection
   * and the correct answer selections using different styles if they differ.
   * If null, this behavior is disabled. This is used in exam review mode.
   */
  correctAnswerIndex: number | null;

  /**
   * Called when the user clicks an answer.
   */
  onChangeAnswerIndex: (selectedAnswerIndex: number) => void;
};

export const ExamAnswerSelect: SFC<ExamAnswerSelectProps> = props => {
  const {
    answerLabels,
    selectedAnswerIndex,
    correctAnswerIndex,
    onChangeAnswerIndex,
  } = props;

  const answerNodes = answerLabels.map((label, index) => {
    const selectionStyle = getSelectionStyle(
      index,
      selectedAnswerIndex,
      correctAnswerIndex,
    );
    const selected =
      selectionStyle !== undefined || index === selectedAnswerIndex;

    return (
      <ExamAnswerSelectItem
        key={`${index}-${label}`}
        answerLabel={label}
        answerIndex={index}
        selected={selected}
        selectionStyle={selectionStyle}
        onClick={onChangeAnswerIndex}
      />
    );
  });

  return <Wrapper>{answerNodes}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.unit}px;
  }
`;

function getSelectionStyle(
  answerIndex: number,
  selectedAnswerIndex: number | null,
  correctAnswerIndex: number | null,
): ExamAnswerSelectItemProps["selectionStyle"] {
  if (selectedAnswerIndex === null) return undefined;
  if (correctAnswerIndex === null) return undefined;

  if (
    answerIndex === correctAnswerIndex &&
    answerIndex === selectedAnswerIndex
  ) {
    return "user-correct";
  }
  if (answerIndex === correctAnswerIndex) return "exam-correct";
  if (answerIndex === selectedAnswerIndex) return "user-incorrect";
  return undefined;
}
