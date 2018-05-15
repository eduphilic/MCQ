import React, { SFC } from "react";
import styled from "styled";

import Typography from "@material-ui/core/Typography";

import { Logo } from "../../molecules/Logo";
import { LogoutButton, LogoutButtonProps } from "../../molecules/LogoutButton";

export interface OnboardingHeaderProps {
  logoutButtonProps: LogoutButtonProps;
}

/**
 * Header for onboarding screens.
 */
export const OnboardingHeader: SFC<OnboardingHeaderProps> = props => {
  const { logoutButtonProps } = props;

  return (
    <Wrapper>
      <Logo hideTextMobile />
      <Text>Welcome Jay, let's setup your Uniform account</Text>
      <LogoutButtonWrapper>
        <LogoutButton {...logoutButtonProps} />
      </LogoutButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-top: ${props => props.theme.spacing.unit * 2}px;
`;

const Text = styled(Typography).attrs({ variant: "headline" })`
  flex: 1;
  font-size: 24px;
  text-align: center;

  ${props => props.theme.breakpoints.down("sm")} {
    flex-basis: 100%;
    order: 2;
    margin-top: ${props => props.theme.spacing.unit * 2}px;
  }
`;

const LogoutButtonWrapper = styled.div`
  ${props => props.theme.breakpoints.down("sm")} {
    margin-left: auto;
  }
`;
