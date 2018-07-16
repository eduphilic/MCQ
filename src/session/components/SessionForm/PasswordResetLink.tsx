import React, { SFC } from "react";
import { routePathFromLocalizationKey } from "routes";

import { DisableableLink } from "./DisableableLink";

export type PasswordResetLinkProps = {
  disabled: boolean;
};

export const PasswordResetLink: SFC<PasswordResetLinkProps> = props => (
  <DisableableLink
    disabled={props.disabled}
    to={routePathFromLocalizationKey(
      "routes_pages_Landing_LandingPasswordReset",
    )}
    label="Reset Password"
  />
);
