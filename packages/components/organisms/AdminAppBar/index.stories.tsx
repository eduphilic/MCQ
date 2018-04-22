import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import AppBar from "material-ui/AppBar";
import React from "react";
import { AdminAppBar, AdminAppBarProps } from ".";
import { createPlaceholderAdminAppBarProps } from "./createPlaceholderAdminAppBarProps";

storiesOf("Organisms", module).add(
  "AdminAppBar",
  withInfo()(() => {
    const props: AdminAppBarProps = {
      ...createPlaceholderAdminAppBarProps(),
      onLogoutClick: action("onLogoutClick"),
    };

    return (
      <div style={{ position: "relative", height: 64 }}>
        <AppBar position="absolute" color="inherit">
          <AdminAppBar {...props} />
        </AppBar>
      </div>
    );
  }),
);
