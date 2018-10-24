import { Router } from "@reach/router";
import React from "react";
import { AdminLoginPage, RootIndexPage } from "./pages";
import { LightTheme, ThemeBaseline } from "./styled";

export const App = () => (
  <ThemeBaseline>
    <LightTheme>
      <Router>
        <RootIndexPage path="/" />
        <AdminLoginPage path="/admin/login" />
      </Router>
    </LightTheme>
  </ThemeBaseline>
);
