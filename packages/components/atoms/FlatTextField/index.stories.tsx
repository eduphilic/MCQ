import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { FlatTextField } from ".";

storiesOf("Atoms", module).add(
  "FlatTextField",
  withInfo()(() => <FlatTextField />),
);
