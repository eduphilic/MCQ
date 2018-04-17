import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import Button from "material-ui/Button";
import React, { SFC } from "react";
import styled from "styled";

export interface LogoutButtonProps {
  /** Called when clicked. */
  onClick: () => void;
}

/** Logout button. */
export const LogoutButton: SFC<LogoutButtonProps> = props => {
  const { onClick } = props;

  return (
    <StyledButton onClick={onClick}>
      <LogoutIcon />
      Logout
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
