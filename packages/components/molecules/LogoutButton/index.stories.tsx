import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { LogoutButton } from ".";

storiesOf("Molecules", module).add(
  "LogoutButton",
  withInfo()(() => <LogoutButton onClick={action("onClick")} />),
);
