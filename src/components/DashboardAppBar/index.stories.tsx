import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { DrawerStateProvider } from "components/ResponsiveDrawerFrame";
import { DashboardAppBar } from ".";

const history = createMemoryHistory();
history.push("/admin/dashboard");

storiesOf("Components", module)
  .addDecorator(story => (
    <Provider
      store={createStore(() => ({
        navigation: { locationPageTitleWithoutProductName: "JoinUniform" },
      }))}
    >
      {story()}
    </Provider>
  ))
  .add(
    "DashboardAppBar",
    withInfo()(() => {
      return (
        <Router history={history}>
          <DrawerStateProvider>
            <div style={{ position: "relative", height: 64 }}>
              <AppBar position="absolute" color="inherit">
                <DashboardAppBar />
              </AppBar>
            </div>
          </DrawerStateProvider>
        </Router>
      );
    }),
  );
