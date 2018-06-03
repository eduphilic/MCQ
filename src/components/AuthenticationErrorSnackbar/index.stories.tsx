import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { AuthenticationErrorSnackbar } from ".";

storiesOf("Components", module).add(
  "AuthenticationErrorSnackbar",
  withInfo()(() => {
    //

    return (
      <AuthenticationErrorSnackbar
        error={boolean("Open", true) ? "Invalid username or password." : null}
        onClose={action("onClose")}
      />
    );
  }),
);
