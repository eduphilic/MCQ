import React, { SFC } from "react";
import styled, { css } from "styled";

import { fade } from "@material-ui/core/styles/colorManipulator";
import Check from "@material-ui/icons/Check";

import { Button } from "components/Button";
import { Typography } from "components/Typography";

export interface ExamAnswerSelectItemProps {
  className?: string;

  /**
   * Answer text.
   */
  answerLabel: string;

  /**
   * Answer's index in the list. It is used for both the onClick handler and in
   * generating the letter to the left of the answer label.
   */
  answerIndex: number;

  /**
   * Whether the answer is selected or not.
   */
  selected: boolean;

  /**
   * Called when the answer is clicked.
   */
  onClick: (answerIndex: number) => any;
}

/**
 * A button for an exam answer.
 */
const ExamAnswerSelectItem: SFC<ExamAnswerSelectItemProps> = props => {
  const { className, answerLabel, answerIndex, selected, onClick } = props;

  const classnames = `${className} ${selected ? "selected" : ""}`;
  const answerLetter = getAnswerLetterFromIndex(answerIndex);

  return (
    <Button
      className={classnames}
      variant="flat"
      onClick={() => onClick(answerIndex)}
    >
      <div className="selection-circle">
        <div className="letter-circle">
          <Typography className="answer-letter">{answerLetter}</Typography>
        </div>

        <div className="selection-mask" />
        <Check className="check-mark" />
      </div>

      <Typography className="answer-label">{answerLabel}</Typography>
    </Button>
  );
};

const selectionCircleBase = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const StyledExamAnswerSelectItem = styled(ExamAnswerSelectItem)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-left: 8px;
  padding-top: 4px;
  padding-bottom: 4px;

  .selection-circle {
    ${selectionCircleBase};
    position: relative;
  }

  .selection-mask {
    ${selectionCircleBase};
    display: none;
    position: absolute;
    top: 0;
    left: 0;
  }

  &.selected .selection-mask {
    display: flex;
    background-color: ${({ theme }) => fade(theme.palette.primary.light, 0.45)};
  }

  .letter-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    border: 1px solid #dbdbdb;
  }

  .check-mark {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 28px;
    height: 28px;
    transform: translate(-50%, -50%);
  }

  &.selected .check-mark {
    display: block;
  }

  .answer-label {
    margin-left: 4px;
  }

  .answer-letter {
    font-size: 12px;
  }
`;

export { StyledExamAnswerSelectItem as ExamAnswerSelectItem };

const getAnswerLetterFromIndex = (index: number): string =>
  String.fromCharCode(65 /* Beginning of alphabet */ + index);
