import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { Button } from "components/Button";
import { DashboardAppBarIconStore } from "stores";
import { DashboardAppBarIconGroup } from ".";

storiesOf("Components", module).add(
  "DashboardAppBarIconGroup",
  withInfo()(() => {
    //
    /* tslint:disable-next-line:no-console */

    return (
      <DashboardAppBarIconStore.Provider>
        <AppBar position="static">
          <Toolbar>
            <DashboardAppBarIconStore.Consumer>
              {({ iconGroups }) => iconGroups.map(i => i.iconGroupNode)}
            </DashboardAppBarIconStore.Consumer>
          </Toolbar>
        </AppBar>

        <DashboardAppBarIconGroup iconGroupKey="dashboard-app-bar-icon-group-story">
          <>
            <Button color="inherit">Sign-in</Button>
            <Button color="inherit">Logout</Button>
          </>
        </DashboardAppBarIconGroup>

        <DashboardAppBarIconGroup iconGroupKey="dashboard-app-bar-icon-group-story-2">
          <Button color="inherit">Other</Button>
        </DashboardAppBarIconGroup>
      </DashboardAppBarIconStore.Provider>
    );
  }),
);
