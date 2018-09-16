import { Typography } from "componentsV0/Typography";
import { examDrawerInfoCardBackground } from "css";
import React, { Fragment, ReactNode, SFC } from "react";
import styled from "styled";

export type ExamDrawerPerformanceAnalysisProps = {
  examResult: "pass" | "fail";
};

export const ExamDrawerPerformanceAnalysis: SFC<
  ExamDrawerPerformanceAnalysisProps
> = props => {
  const { examResult } = props;

  return (
    <div>
      <TitleWrapper>
        <SectionText bold bottomMargin>
          Army Soldier GD Test 1
        </SectionText>
      </TitleWrapper>

      <SectionWrapper>
        <SectionText bold bottomMargin>
          Performance Analysis
        </SectionText>

        {[
          "Total Questions – 50",
          "Not Answered – 10",
          "Correctly Answered – 30",
          "Wrong Answers – 10",
        ].map(text => (
          <SectionText key={text}>{text}</SectionText>
        ))}
      </SectionWrapper>

      <SectionWrapper>
        <SectionText>Total Attempts - 2345</SectionText>
        <SectionText>Total Passed - 1234</SectionText>
        <SectionText bold statColor={examResult === "pass" ? "green" : "red"}>
          Your Result - Pass
        </SectionText>
      </SectionWrapper>
    </div>
  );
};

const TitleWrapper = styled.div`
  padding: 8px;
  padding-left: 16px;
  background-color: ${examDrawerInfoCardBackground};

  > *:first-child {
    margin: 8px 0;
    margin-bottom: 16px;
  }
`;

const SectionWrapper = styled.div`
  padding: 16px;
`;

type SectionTextProps = {
  className?: string;
  bold?: boolean;
  bottomMargin?: boolean;
  statColor?: "none" | "green" | "red";
};

const SectionText = styled<SectionTextProps>(props => {
  const { children, className, bold, bottomMargin, statColor = "none" } = props;

  if (typeof children !== "string") {
    throw new Error('Expected string for field "children".');
  }

  let text: ReactNode = children;

  if (statColor !== "none") {
    const result = /.*- */.exec(children);
    if (!result) throw new Error("Incorrect format for text.");

    const description = result[0];
    const stat = children.slice(description.length);

    text = [
      <Fragment key="description">{description}</Fragment>,
      <Fragment key="stat">
        <span className={statColor}>{stat}</span>
      </Fragment>,
    ];
  }

  return (
    <Typography
      className={className}
      variant={bold ? "examDrawerTitle" : "examDrawerSubtitle"}
      muiTypographyProps={{ paragraph: bottomMargin }}
    >
      {text}
    </Typography>
  );
})`
  .green {
    color: #00b050;
  }

  .red {
    color: #ff0000;
  }
`;
