import React, { SFC } from "react";
import styled from "styled";

import { Button, ButtonProps } from "components/Button";
import { Typography } from "components/Typography";

export interface ExamAnswerSelectProps {
  /**
   * Answer labels. They will be prepended with letters "a", "b", "c", etc.
   */
  answerLabels: string[];

  /**
   * The currently selected answer. If null, then none are selected.
   */
  selectedAnswerIndex: number | null;
}

export const ExamAnswerSelect: SFC<ExamAnswerSelectProps> = props => {
  const { answerLabels, selectedAnswerIndex } = props;

  const answerNodes = answerLabels.map((label, index) => (
    <AnswerButton
      key={`${index}-${label}`}
      selected={index === selectedAnswerIndex}
    >
      {String.fromCharCode(97 /* Beginning of alphabet */ + index)}.&nbsp;
      {label}
    </AnswerButton>
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

type AnswerButtonProps = ButtonProps & {
  className?: string;
  selected: boolean;
};

const AnswerButton = styled<AnswerButtonProps>(
  ({ children, selected, ...rest }) => (
    <Button variant={selected ? "raised" : "flat"} {...rest}>
      <Typography>{children}</Typography>
    </Button>
  ),
)`
  justify-content: flex-start;
`;
