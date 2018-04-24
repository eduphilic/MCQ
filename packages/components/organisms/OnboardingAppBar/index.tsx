import Toolbar from "material-ui/Toolbar";
import React, { SFC } from "react";
import styled from "styled";
import { Logo } from "../../molecules/Logo";
import { LogoutButton } from "../../molecules/LogoutButton";

export interface OnboardingAppBarProps {
  onLogoutButtonClick: () => void;

  className?: string;
}

export const OnboardingAppBar: SFC<OnboardingAppBarProps> = props => {
  const { className, onLogoutButtonClick } = props;

  return (
    <header>
      <Toolbar className={className} disableGutters>
        <Logo />

        <StyledLogoutButton onClick={onLogoutButtonClick} />
      </Toolbar>
    </header>
  );
};

const StyledLogoutButton = styled(LogoutButton)`
  margin-left: auto;
`;
