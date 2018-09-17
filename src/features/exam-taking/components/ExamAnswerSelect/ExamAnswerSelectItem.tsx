import React, { SFC } from "react";
import styled, { css } from "styled";

import { fade } from "@material-ui/core/styles/colorManipulator";
import Check from "@material-ui/icons/Check";

import { Button } from "componentsV0/Button";
import { Typography } from "componentsV0/Typography";

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
   * Checkmark style. During exam taking, always uses the style "user-correct".
   * During exam review, the styles indicate whether the user's exam answer
   * selection was correct or not and provides the correct answer if not.
   *
   * @default user-correct
   */
  selectionStyle?: "user-correct" | "user-incorrect" | "exam-correct";

  /**
   * Called when the answer is clicked.
   */
  onClick: (answerIndex: number) => any;
}

/**
 * A button for an exam answer.
 */
const ExamAnswerSelectItemBase: SFC<ExamAnswerSelectItemProps> = props => {
  const {
    className,
    answerLabel,
    answerIndex,
    selected,
    selectionStyle = "user-correct",
    onClick,
  } = props;

  const classNames: string[] = [];
  if (className) classNames.push(className);
  if (selected) classNames.push("selected");
  classNames.push(selectionStyle);

  /* tslint:disable-next-line:no-console */
  console.log("classNames", classNames);

  const answerLetter = getAnswerLetterFromIndex(answerIndex);

  return (
    <Button
      className={classNames.join(" ")}
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

const StyledExamAnswerSelectItem = styled(ExamAnswerSelectItemBase)`
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

  /* Selection Mask */
  &.selected {
    & .selection-mask {
      display: flex;
    }

    &.user-correct .selection-mask {
      background-color: ${({ theme }) =>
        fade(theme.palette.primary.light, 0.45)};
    }

    &.user-incorrect .selection-mask {
      background-color: ${({ theme }) => fade(theme.palette.error.main, 0.45)};
    }
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

export const ExamAnswerSelectItem: SFC<ExamAnswerSelectItemProps> = props => (
  <StyledExamAnswerSelectItem {...props} />
);

const getAnswerLetterFromIndex = (index: number): string =>
  String.fromCharCode(65 /* Beginning of alphabet */ + index);
