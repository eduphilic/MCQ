import React, { SFC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Requires access to Router.
import { PersistentScrollPositionProvider } from "components/PersistentScrollPosition";

import { navigationLinksAdmin } from "common/structures/navigationLinksAdmin";
import { navigationLinksAdminLogin } from "common/structures/navigationLinksAdminLogin";
import { navigationLinksLanding } from "common/structures/navigationLinksLanding";
import { navigationLinksUser } from "common/structures/navigationLinksUser";
import { AdminRoute } from "./AdminRoute";
import { UserRoute } from "./UserRoute";

export const SiteMap: SFC<{}> = () => {
  const landingPagesNode = navigationLinksLanding.map(l => (
    <Route
      key={l.to}
      exact={l.to === "/"}
      path={l.to}
      component={l.component}
    />
  ));

  const adminLoginPageNode = navigationLinksAdminLogin.map(l => (
    <Route
      key={l.to}
      exact={l.to === "/admin"}
      path={l.to}
      component={l.component}
    />
  ));

  const adminPagesNode = navigationLinksAdmin.map(l => (
    <AdminRoute key={l.to} path={l.to} component={l.component} />
  ));

  const userPagesNode = navigationLinksUser.map(l => (
    <UserRoute
      key={l.to}
      path={l.to}
      component={l.component}
      links={navigationLinksUser}
    />
  ));

  return (
    <Router>
      <PersistentScrollPositionProvider>
        <Switch>
          {landingPagesNode}
          {userPagesNode}
          {adminLoginPageNode}
          {adminPagesNode}
        </Switch>
      </PersistentScrollPositionProvider>
    </Router>
  );
};
