import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LightTheme, ThemeBaseline } from "theme";

import { Home } from "./pages/Home";
import { Onboarding } from "./pages/Onboarding";
import { PasswordReset } from "./pages/PasswordReset";

import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminLogin } from "./pages/admin/AdminLogin";

const App = () => (
  <ThemeBaseline>
    <LightTheme>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resetPassword" component={PasswordReset} />
          <Route path="/welcome" component={Onboarding} />

          {/* Start Admin Dashboard Routes */}
          <Route exact path="/admin" component={AdminLogin} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
        </Switch>
      </Router>
    </LightTheme>
  </ThemeBaseline>
);

export default App;
