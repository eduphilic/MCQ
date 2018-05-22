import React, { ComponentType, SFC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AdminRoute } from "./AdminRoute";

// Requires access to Router.
import { PersistentScrollPositionProvider } from "components/utils/PersistentScrollPosition";

import { Home } from "../pages/Home";
import { PasswordReset } from "../pages/PasswordReset";

import { Step1, Step2, Step3 } from "../pages/Onboarding";

import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { AdminEntryManager } from "../pages/admin/AdminEntryManager";
import { AdminIndexManager } from "../pages/admin/AdminIndexManager";
import { AdminLogin } from "../pages/admin/AdminLogin";
import { AdminPlanManager } from "../pages/admin/AdminPlanManager";
import { AdminQuestionManager } from "../pages/admin/AdminQuestionManager";
import { AdminRevenueManager } from "../pages/admin/AdminRevenueManager";
import { AdminRevenueManagerDetails } from "../pages/admin/AdminRevenueManagerDetails";
import { AdminTestManager } from "../pages/admin/AdminTestManager";
import { AdminTestManagerNewTemplate } from "../pages/admin/AdminTestManagerNewTemplate";
import { AdminUserManager } from "../pages/admin/AdminUserManager";

export const SiteMap: SFC<{}> = () => {
  const adminDashboardPages: [string, ComponentType<any>][] = [
    ["/admin/dashboard", AdminDashboard],
    ["/admin/entry-manager", AdminEntryManager],
    ["/admin/index-manager", AdminIndexManager],
    ["/admin/plan-manager", AdminPlanManager],
    ["/admin/question-manager", AdminQuestionManager],
    ["/admin/revenue-manager/details", AdminRevenueManagerDetails],
    ["/admin/revenue-manager", AdminRevenueManager],
    ["/admin/test-manager/new", AdminTestManagerNewTemplate],
    ["/admin/test-manager", AdminTestManager],
    ["/admin/user-manager", AdminUserManager],
  ];
  const adminDashboardPagesNode = adminDashboardPages.map(
    ([path, component]) => (
      <AdminRoute key={path} path={path} component={component} />
    ),
  );

  return (
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
          {adminDashboardPagesNode}
        </Switch>
      </PersistentScrollPositionProvider>
    </Router>
  );
};
