import React, { SFC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Requires access to Router.
import { PersistentScrollPositionProvider } from "components/PersistentScrollPosition";

import { navigationLinksAdmin } from "common/structures/navigationLinksAdmin";
import { navigationLinksUser } from "common/structures/navigationLinksUser";
import { AdminRoute } from "./AdminRoute";
import { pages } from "./pages";
import { UserRoute } from "./UserRoute";

export const SiteMap: SFC<{}> = () => {
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
          <Route exact path="/" component={pages.LandingHome} />
          <Route path="/resetPassword" component={pages.LandingPasswordReset} />

          {/* User Dashboard */}
          {userPagesNode}

          {/* On-boarding */}
          <Route path="/welcome/1" component={pages.LandingOnboardingStep1} />
          <Route path="/welcome/2" component={pages.LandingOnboardingStep2} />
          <Route path="/welcome/3" component={pages.LandingOnboardingStep3} />

          {/* Start Admin Dashboard Routes */}
          <Route exact path="/admin" component={pages.AdminLogin} />
          {adminPagesNode}
        </Switch>
      </PersistentScrollPositionProvider>
    </Router>
  );
};
