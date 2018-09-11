import React, { SFC } from "react";
import styled from "styled";

import { DrawerLogo } from "componentsV0/DrawerLogo";

import { FeatureKey } from "../../types/FeatureKey";
import { ExamDrawerQuestionPalette } from "../ExamDrawerQuestionPalette";
import { ExamDrawerQuestionSelect } from "../ExamDrawerQuestionSelect";
import { ExamDrawerTimerInfoCard } from "../ExamDrawerTimerInfoCard";

export type ExamDrawerContentsProps = FeatureKey;

export const ExamDrawerContents: SFC<ExamDrawerContentsProps> = props => {
  const { featureKey } = props;

  return (
    <Wrapper>
      <DrawerLogo />

      <ExamDrawerTimerInfoCard />

      <ExamDrawerQuestionPalette />

      <ExamDrawerQuestionSelect featureKey={featureKey} />
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
