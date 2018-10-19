import { Router } from "@reach/router";
import React, { StrictMode } from "react";
import { RootIndexPage } from "./pages";

export const App = () => (
  <StrictMode>
    <Router>
      <RootIndexPage path="/" />
    </Router>
  </StrictMode>
);
