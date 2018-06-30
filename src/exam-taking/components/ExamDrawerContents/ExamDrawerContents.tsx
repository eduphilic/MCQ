import React, { SFC } from "react";
import styled from "styled";

import { DrawerLogo } from "components/DrawerLogo";

import { ExamDrawerQuestionPalette } from "../ExamDrawerQuestionPalette";
import { ExamDrawerQuestionSelect } from "../ExamDrawerQuestionSelect";
import { ExamDrawerTimerInfoCard } from "../ExamDrawerTimerInfoCard";

// tslint:disable-next-line:no-empty-interface
export interface ExamDrawerContentsProps {}

export const ExamDrawerContents: SFC<ExamDrawerContentsProps> = props => {
  const {} = props;

  return (
    <Wrapper>
      <DrawerLogo />

      <ExamDrawerTimerInfoCard />

      <ExamDrawerQuestionPalette />

      <ExamDrawerQuestionSelect />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > *:first-child {
    padding: 8px 4px 8px 16px;
  }

  > *:not(:first-child) {
    margin-bottom: 16px;
  }
`;
