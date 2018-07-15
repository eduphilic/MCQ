import React, { SFC } from "react";
import { Route } from "react-router-dom";
import { routePathFromLocalizationKey } from "../routes";

import { LandingPage } from "./LandingPage";
import { PasswordResetPage } from "./PasswordResetPage";

export const LandingPages: SFC<{}> = () => (
  <>
    <Route
      path={routePathFromLocalizationKey("routes_pages_Landing_LandingHome")}
      exact
      component={LandingPage}
    />

    <Route
      path={routePathFromLocalizationKey(
        "routes_pages_Landing_LandingPasswordReset",
      )}
      component={PasswordResetPage}
    />
  </>
);
