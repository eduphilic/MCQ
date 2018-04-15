import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { TextFieldBase } from ".";

storiesOf("Atoms", module).add(
  "TextFieldBase",
  withInfo()(() => <TextFieldBase />),
);
