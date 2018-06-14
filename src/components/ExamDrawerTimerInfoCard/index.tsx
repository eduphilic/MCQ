import { examDrawerInfoCardBackground } from "common/css/colors";
import React, { SFC } from "react";
import styled from "styled";
import { UserAppDrawerTheme } from "theme";

import { Typography } from "components/Typography";

// tslint:disable-next-line:no-empty-interface
export interface ExamDrawerTimerInfoCardProps {}

export const ExamDrawerTimerInfoCard: SFC<
  ExamDrawerTimerInfoCardProps
> = props => {
  const {} = props;

  return (
    <UserAppDrawerTheme>
      <Wrapper>
        <Typography variant="examDrawerTitle">
          Army Solider GD Test 1
        </Typography>
      </Wrapper>
    </UserAppDrawerTheme>
  );
};

const Wrapper = styled.div`
  background-color: ${examDrawerInfoCardBackground};
`;
