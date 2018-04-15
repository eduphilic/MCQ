import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { TooltipArrow } from ".";

storiesOf("Atoms", module).add(
  "TooltipArrow",
  withInfo()(() => <TooltipArrow />),
);
