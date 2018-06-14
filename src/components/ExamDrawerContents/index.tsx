import React, { SFC } from "react";
import styled from "styled";

import { DrawerLogo } from "components/DrawerLogo";
import { ExamDrawerTimerInfoCard } from "components/ExamDrawerTimerInfoCard";

// tslint:disable-next-line:no-empty-interface
export interface ExamDrawerContentsProps {}

export const ExamDrawerContents: SFC<ExamDrawerContentsProps> = props => {
  const {} = props;

  return (
    <Wrapper>
      <DrawerLogo />

      <ExamDrawerTimerInfoCard />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > *:first-child {
    padding: 8px 4px 8px 16px;
  }
`;
