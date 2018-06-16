import React from "react";
import { hot } from "react-hot-loader";

import { ExamNavigationStorePlaceholderProvider } from "components/ExamNavigationStorePlaceholder";
import { LightTheme, ThemeBaseline } from "theme";
import { SiteMap } from "./pages";

const App = () => (
  <ExamNavigationStorePlaceholderProvider>
    <ThemeBaseline>
      <LightTheme>
        <SiteMap />
      </LightTheme>
    </ThemeBaseline>
  </ExamNavigationStorePlaceholderProvider>
);

export default hot(module)(App);
