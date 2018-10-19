import React from "react";
import { Switch, Route } from "react-router-dom";
import { RootIndexPage } from "./pages";

export const App = () => (
  <Switch>
    <Route exact path="/" component={RootIndexPage} />
  </Switch>
);
