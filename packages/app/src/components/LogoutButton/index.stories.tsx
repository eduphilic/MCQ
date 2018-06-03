import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { Typography } from "components/Typography";
import React from "react";
import { LogoutButton } from ".";

storiesOf("Components", module).add(
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
