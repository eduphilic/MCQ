import React, { SFC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AdminRoute } from "./AdminRoute";

// Requires access to Router.
import { PersistentScrollPositionProvider } from "components/utils/PersistentScrollPosition";

import { Home } from "./pages/Home";
import { PasswordReset } from "./pages/PasswordReset";

import { Step1, Step2, Step3 } from "./pages/Onboarding";

import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AdminPlaceholder } from "./pages/admin/AdminPlaceholder";

export const SiteMap: SFC<{}> = () => (
  <Router>
    <PersistentScrollPositionProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resetPassword" component={PasswordReset} />

        {/* On-boarding */}
        <Route path="/welcome/1" component={Step1} />
        <Route path="/welcome/2" component={Step2} />
        <Route path="/welcome/3" component={Step3} />

        {/* Start Admin Dashboard Routes */}
        <Route exact path="/admin" component={AdminLogin} />
        <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute path="/admin" component={AdminPlaceholder} />
      </Switch>
    </PersistentScrollPositionProvider>
  </Router>
);
