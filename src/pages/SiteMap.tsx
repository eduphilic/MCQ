import React, { SFC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Requires access to Router.
import { PersistentScrollPositionProvider } from "components/PersistentScrollPosition";
import { ReduxRouterConnector } from "navigation";

import { navigationLinksAdmin } from "common/structures/navigationLinksAdmin";
import { navigationLinksAdminForms } from "common/structures/navigationLinksAdminForms";
import { navigationLinksAdminLogin } from "common/structures/navigationLinksAdminLogin";
import { navigationLinksExam } from "common/structures/navigationLinksExam";
import { navigationLinksLanding } from "common/structures/navigationLinksLanding";
import { navigationLinksUser } from "common/structures/navigationLinksUser";
import { AdminRoute } from "./AdminRoute";
import { UserRoute } from "./UserRoute";

export const SiteMap: SFC<{}> = () => {
  const landingPagesNode = navigationLinksLanding
    .filter(l => l.to === "/" || l.to === "/resetPassword")
    .map(l => (
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

  // Admin form pages need to come before the other admin page links because
  // they are one directory deeper. If it is the other way around, React Router
  // will never render them.
  const adminPagesNode = navigationLinksAdminForms
    .concat(navigationLinksAdmin)
    .map(l => <AdminRoute key={l.to} path={l.to} component={l.component} />);

  const examPageNode = navigationLinksExam.map(l => (
    <Route key={l.titleLocalizationKey} path={l.to} component={l.component} />
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
      <>
        <ReduxRouterConnector />
        <PersistentScrollPositionProvider />

        <Switch>
          {landingPagesNode}
          {userPagesNode}
          {adminLoginPageNode}
          {adminPagesNode}
          {examPageNode}
        </Switch>
      </>
    </Router>
  );
};
