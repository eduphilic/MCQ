import { storiesOf } from "@storybook/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";

import { DrawerStateProvider } from "componentsV0/ResponsiveDrawerFrame";
import { PlaceholderProvider } from "store";
import { DashboardAppBar } from ".";

const history = createMemoryHistory();
history.push("/admin/dashboard");

storiesOf("Components V0", module)
  .addDecorator(story => <PlaceholderProvider>{story()}</PlaceholderProvider>)
  .add("DashboardAppBar", () => {
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
  });
