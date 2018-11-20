import { Router } from "@reach/router";
import React from "react";
import { AppProviders } from "./AppProviders";
import { routes } from "./routes";

export function App() {
  return (
    <AppProviders>
      <Router>{routes}</Router>
    </AppProviders>
  );
}
