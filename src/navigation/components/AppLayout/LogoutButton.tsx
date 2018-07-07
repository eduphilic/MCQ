import React from "react";
import styled from "styled";

import Button, { ButtonProps } from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";

/** Logout button. */
export const LogoutButton = styled<ButtonProps>(props => (
  <Tooltip title="Logout">
    <Button {...props}>
      <PowerSettingsNew />
    </Button>
  </Tooltip>
))`
  min-width: inherit;
  margin-right: -12px;
  color: #910f0f;
  text-transform: none;
`;
