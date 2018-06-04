import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Add from "@material-ui/icons/Add";

import { DrawerStateProvider } from "components/ResponsiveDrawerFrame";
import { ResponsiveToolbarTypographyButton } from "components/ResponsiveToolbarTypographyButton";
import { ToolbarProfileMenu } from "components/ToolbarProfileMenu";
import { DashboardAppBar, DashboardAppBarProps } from ".";
import { createPlaceholderDashboardAppBarProps } from "./createPlaceholderDashboardAppBarProps";

storiesOf("Components", module).add(
  "DashboardAppBar",
  withInfo()(() => {
    const props: DashboardAppBarProps = {
      ...createPlaceholderDashboardAppBarProps(),
      onLogoutButtonClick: action("onLogoutClick"),
    };

    const withActionButtonNodesProps: DashboardAppBarProps = {
      ...props,
      actionButtonElements: [
        <ResponsiveToolbarTypographyButton
          tooltipTitle="Add New Entry"
          iconNode={<Add />}
          color="orange"
        >
          Entry
        </ResponsiveToolbarTypographyButton>,
      ],
    };

    return (
      <DrawerStateProvider>
        <div style={{ position: "relative", height: 64 }}>
          <AppBar position="absolute" color="inherit">
            <DashboardAppBar {...props} />
          </AppBar>
        </div>

        <div style={{ height: 24 }} />

        <div style={{ position: "relative", height: 64 }}>
          <AppBar position="absolute" color="inherit">
            <DashboardAppBar
              {...withActionButtonNodesProps}
              logoutButtonElement={
                <ToolbarProfileMenu
                  toolbarAvatarProps={{ name: "John Doe", letters: "JD" }}
                />
              }
            />
          </AppBar>
        </div>
      </DrawerStateProvider>
    );
  }),
);
