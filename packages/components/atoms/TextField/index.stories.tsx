import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { TextField } from ".";

storiesOf("Atoms", module).add(
  "TextField",
  withInfo()(() => (
    <TextField
      label="Invalid email address"
      error={boolean("Has a validation error", true)}
    />
  )),
);
