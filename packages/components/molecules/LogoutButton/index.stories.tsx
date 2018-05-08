import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { LogoutButton } from ".";
import { Typography } from "../../atoms/Typography";

storiesOf("Molecules", module).add(
  "LogoutButton",
  withInfo()(() => (
    <div>
      <Typography>Normal</Typography>
      <LogoutButton onClick={action("onClick")} />
      <br />
      <Typography>Hide Text and Use Tooltip even on large Viewports</Typography>
      <LogoutButton dense onClick={action("onClick")} />
    </div>
  )),
);
