import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { AttemptButton } from ".";

storiesOf("Atoms", module).add(
  "AttemptButton",
  withInfo()(() => <AttemptButton />),
);
