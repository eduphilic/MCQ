import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import strings from "l10n";
import Button from "material-ui/Button";
import React, { SFC } from "react";
import styled from "styled";

export interface LogoutButtonProps {
  /** Called when clicked. */
  onClick: () => void;

  className?: string;
}

/** Logout button. */
export const LogoutButton: SFC<LogoutButtonProps> = props => {
  const { className, onClick } = props;

  return (
    <StyledButton className={className} onClick={onClick}>
      <LogoutIcon />
      {strings.logoutButtonText}
    </StyledButton>
  );
};

const LogoutIcon = styled(PowerSettingsNew)`
  margin-right: ${props => props.theme.spacing.unit}px;
`;

const StyledButton = styled(Button)`
  color: #910f0f;
  text-transform: none;
`;
