import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Button } from ".";

storiesOf("Atoms", module).add(
  "Button",
  withInfo()(() => (
    <Button {...(boolean("Flat", false) ? { variant: "flat" } : {})}>
      Button
    </Button>
  )),
);
