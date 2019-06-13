import React, { SFC } from "react";
import { strings } from "../../../localization";
import { routePathFromLocalizationKey } from "../../../navigation";

import { DisableableLink } from "./DisableableLink";

export type PasswordResetLinkProps = {
  disabled: boolean;
};

export const PasswordResetLink: SFC<PasswordResetLinkProps> = props => (
  <DisableableLink
    disabled={props.disabled}
    to={routePathFromLocalizationKey("routes_Landing_PasswordResetPage")}
    label={strings.session_SessionForm_PasswordResetLinkLabel}
  />
);
