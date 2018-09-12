import { Typography } from "componentsV0/Typography";
import { examDrawerInfoCardBackground } from "css";
import React, { SFC } from "react";
import styled from "styled";

export type ExamDrawerPerformanceAnalysisProps = {};

export const ExamDrawerPerformanceAnalysis: SFC<
  ExamDrawerPerformanceAnalysisProps
> = props => {
  const {} = props;

  return (
    <div>
      <TitleWrapper>
        <Typography variant="examDrawerTitle">
          Army Soldier GD Test 1
        </Typography>
      </TitleWrapper>

      <Wrapper>
        <Typography
          variant="examDrawerTitle"
          muiTypographyProps={{ paragraph: true }}
        >
          Performance Analysis
        </Typography>

        <Typography
          variant="examDrawerSubtitle"
          muiTypographyProps={{ paragraph: true }}
        >
          Total Questions – 50
          <br />
          Not Answered – 10
          <br />
          Correctly Answered – 30
          <br />
          Wrong Answers – 10
          <br />
        </Typography>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  padding: 16px;
`;

const TitleWrapper = styled.div`
  padding: 8px;
  padding-left: 16px;
  background-color: ${examDrawerInfoCardBackground};

  > *:first-child {
    margin: 8px 0;
    margin-bottom: 16px;
  }
`;
