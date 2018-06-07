import React from "react";
import { hot } from "react-hot-loader";

import { DashboardAppBarIconStore, PageTitleStore } from "stores";
import { LightTheme, ThemeBaseline } from "theme";
import { SiteMap } from "./pages";

const App = () => (
  <ThemeBaseline>
    <LightTheme>
      <PageTitleStore.Provider>
        <DashboardAppBarIconStore.Provider>
          <SiteMap />
        </DashboardAppBarIconStore.Provider>
      </PageTitleStore.Provider>
    </LightTheme>
  </ThemeBaseline>
);

export default hot(module)(App);
