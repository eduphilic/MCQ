import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Add from "@material-ui/icons/Add";

import { DrawerStateProvider } from "components/ResponsiveDrawerFrame";
import { ResponsiveToolbarTypographyButton } from "components/ResponsiveToolbarTypographyButton";
import { AdminAppBar, AdminAppBarProps } from ".";
import { createPlaceholderAdminAppBarProps } from "./createPlaceholderAdminAppBarProps";

storiesOf("Components", module).add(
  "AdminAppBar",
  withInfo()(() => {
    const props: AdminAppBarProps = {
      ...createPlaceholderAdminAppBarProps(),
      onLogoutButtonClick: action("onLogoutClick"),
    };

    const withActionButtonNodesProps: AdminAppBarProps = {
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
            <AdminAppBar {...props} />
          </AppBar>
        </div>

        <div style={{ height: 24 }} />

        <div style={{ position: "relative", height: 64 }}>
          <AppBar position="absolute" color="inherit">
            <AdminAppBar {...withActionButtonNodesProps} />
          </AppBar>
        </div>
      </DrawerStateProvider>
    );
  }),
);
