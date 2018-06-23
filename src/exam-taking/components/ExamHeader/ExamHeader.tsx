import { textGrey, whiteDark } from "common/css/colors";
import React, { SFC } from "react";
import styled from "styled";

import { Typography } from "components/Typography";

export interface ExamHeaderProps {
  /**
   * Exam section title.
   *
   * Example: Part 1. General Knowledge
   */
  sectionTitle: string;

  /**
   * Amount of marks given or taken for answering the questions in this section.
   * It will be surrounded by parentheses and applied a grey color. It will
   * follow directly after the section title.
   *
   * Example: +2, -.33
   */
  sectionMarkingsCaption: string;

  /**
   * Section instructions, shown under the section title.
   */
  sectionInstructions: string;

  /**
   * Question text including the question number.
   */
  question: string;

  /**
   * Exam name, shown under the question text in grey text.
   */
  examName: string;
}

export const ExamHeader: SFC<ExamHeaderProps> = props => {
  const {
    sectionTitle,
    sectionMarkingsCaption,
    sectionInstructions,
    question,
    examName,
  } = props;

  return (
    <Wrapper>
      <Typography variant="cardTitle">
        {sectionTitle}&nbsp;
        <MarkingsCaption>({sectionMarkingsCaption})</MarkingsCaption>
      </Typography>

      <Well>
        <Typography>{sectionInstructions}</Typography>
      </Well>

      <Typography>{question}</Typography>

      <Typography style={{ color: textGrey }}>{examName}</Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > * {
    margin-bottom: 8px;
  }
`;

const MarkingsCaption = styled.span`
  /* So entire span goes to new line on mobile. */
  display: inline-block;
  color: ${textGrey};
`;

const Well = styled.div`
  padding: 8px;
  margin-left: -8px;
  margin-right: -8px;
  background-color: ${whiteDark};
`;
