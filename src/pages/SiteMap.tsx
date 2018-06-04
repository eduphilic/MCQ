import React, { ComponentType, SFC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Requires access to Router.
import { PersistentScrollPositionProvider } from "components/PersistentScrollPosition";

import * as adminPages from "./admin";
import { AdminRoute } from "./AdminRoute";
import * as landingPages from "./landing";
import * as userPages from "./user";
import { UserRoute } from "./UserRoute";

const pages = { ...adminPages, ...landingPages, ...userPages };

export const SiteMap: SFC<{}> = () => {
  const adminDashboardPages: [string, ComponentType<any>][] = [
    ["/admin/dashboard", pages.AdminDashboard],
    ["/admin/entry-manager", pages.AdminEntryManager],
    ["/admin/index-manager", pages.AdminIndexManager],
    ["/admin/plan-manager", pages.AdminPlanManager],
    [
      "/admin/question-manager/reported",
      pages.AdminQuestionManagerReportedQuestions,
    ],
    ["/admin/question-manager", pages.AdminQuestionManager],
    ["/admin/revenue-manager", pages.AdminRevenueManager],
    ["/admin/test-manager/new", pages.AdminTestManagerNewTemplate],
    ["/admin/test-manager", pages.AdminTestManager],
    ["/admin/user-manager", pages.AdminUserManager],
  ];
  const adminDashboardPagesNode = adminDashboardPages.map(
    ([path, component]) => (
      <AdminRoute key={path} path={path} component={component} />
    ),
  );

  const userPagesMap: [string, ComponentType<any>][] = [
    ["/dashboard", pages.UserDashboard],
    ["/exam-pack", pages.UserExamPack],
    ["/membership", pages.UserMembership],
    ["/settings", pages.UserSettings],
  ];

  const userPagesNode = userPagesMap.map(([path, component]) => (
    <UserRoute key={path} path={path} component={component} />
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
          {adminDashboardPagesNode}
        </Switch>
      </PersistentScrollPositionProvider>
    </Router>
  );
};
