import React, { SFC } from "react";

import { DisableableLink } from "./DisableableLink";

export type PasswordResetLinkProps = {
  label: string;
  disabled: boolean;
};

export const PasswordResetLink: SFC<PasswordResetLinkProps> = props => (
  <DisableableLink
    disabled={props.disabled}
    to="/reset-password"
    label={props.label}
  />
);
