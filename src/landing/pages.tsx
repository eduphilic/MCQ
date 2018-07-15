import React from "react";
import { Route } from "react-router-dom";
import { routePathFromLocalizationKey } from "../routes";

import { LandingPage } from "./LandingPage";
import { PasswordResetPage } from "./PasswordResetPage";

export const pages = [
  <Route
    key="landing"
    path={routePathFromLocalizationKey("routes_pages_Landing_LandingHome")}
    exact
    component={LandingPage}
  />,

  <Route
    key="password"
    path={routePathFromLocalizationKey(
      "routes_pages_Landing_LandingPasswordReset",
    )}
    component={PasswordResetPage}
  />,
];
