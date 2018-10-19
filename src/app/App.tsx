import { Router } from "@reach/router";
import React, { StrictMode } from "react";
import { RootIndexPage } from "./pages";
import { ThemeBaseline } from "./styled";

export const App = () => (
  <StrictMode>
    <ThemeBaseline>
      <Router>
        <RootIndexPage path="/" />
      </Router>
    </ThemeBaseline>
  </StrictMode>
);
