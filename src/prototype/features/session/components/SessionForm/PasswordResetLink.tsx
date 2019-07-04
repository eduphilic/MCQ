import React, { SFC } from "react";
import { strings } from "../../../localization";
import { routePathFromLocalizationKey } from "../../../navigation";

import { AuthenticationFormLink } from "../../../../../components/AuthenticationFormLink";

export type PasswordResetLinkProps = {
  disabled: boolean;
};

export const PasswordResetLink: SFC<PasswordResetLinkProps> = () => (
  <AuthenticationFormLink
    to={routePathFromLocalizationKey("routes_Landing_PasswordResetPage")}
  >
    {strings.session_SessionForm_PasswordResetLinkLabel}
  </AuthenticationFormLink>
);
