import React, { SFC } from "react";
// import styled from "styled";

import Toolbar from "@material-ui/core/Toolbar";

import { Logo } from "componentsV0/Logo";
// import { LogoutButton } from "componentsV0/LogoutButton";

export interface OnboardingAppBarProps {
  onLogoutButtonClick: () => void;

  className?: string;
}

export const OnboardingAppBar: SFC<OnboardingAppBarProps> = props => {
  const { className /* onLogoutButtonClick */ } = props;

  return (
    <header>
      <Toolbar className={className} disableGutters>
        <Logo />

        {/* <StyledLogoutButton onClick={onLogoutButtonClick} /> */}
      </Toolbar>
    </header>
  );
};

// const StyledLogoutButton = styled(LogoutButton)`
//   margin-left: auto;
// `;
