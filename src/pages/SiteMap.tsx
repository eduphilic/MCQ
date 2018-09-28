import React, { SFC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  MultipathRoute,
  PersistentScrollPosition, // Requires access to Router.
  ReduxRouterConnector,
} from "features/navigation";

import { navigationLinksAdmin } from "common/structures/navigationLinksAdmin";
import { navigationLinksAdminForms } from "common/structures/navigationLinksAdminForms";
import { navigationLinksAdminLogin } from "common/structures/navigationLinksAdminLogin";
import { navigationLinksExam } from "common/structures/navigationLinksExam";
import { AdminRoute } from "./AdminRoute";

import { DashboardPages } from "features/dashboard";
import { pages as examReviewPages } from "features/exam-review";
import { pages as landingPages } from "features/landing";

import { TestLoadingPage } from "../TestLoadingPage";

export const SiteMap: SFC<{}> = () => {
  const adminLoginPageNode = navigationLinksAdminLogin.map(l => (
    <Route
      key={l.to}
      exact={l.to === "/admin"}
      path={l.to}
      component={l.component}
    />
  ));

  // Admin form pages need to come before the other admin page links because
  // they are one directory deeper. If it is the other way around, React Router
  // will never render them.
  const adminPagesNode = navigationLinksAdminForms
    .concat(navigationLinksAdmin)
    .map(l => <AdminRoute key={l.to} path={l.to} component={l.component} />);

  const examPageNode = navigationLinksExam.map(l => (
    <Route key={l.titleLocalizationKey} path={l.to} component={l.component} />
  ));

  return (
    <Router>
      <>
        <ReduxRouterConnector />
        <PersistentScrollPosition />

        <Switch>
          <Route path="/loading" component={TestLoadingPage} />

          {landingPages}

          {adminLoginPageNode}
          {adminPagesNode}
          {examPageNode}

          {examReviewPages}

          <MultipathRoute
            paths={[
              "/dashboard",
              "/exam-pack",
              "/membership",
              "/settings",
              "/welcome/entries",
              "/welcome/plans",
              "/payment",
            ]}
            component={DashboardPages}
          />
        </Switch>
      </>
    </Router>
  );
};
