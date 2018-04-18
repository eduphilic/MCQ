import { withInfo } from "@storybook/addon-info";
import { boolean, selectV2 } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { CheckmarkableCircle, CheckmarkableCircleProps } from ".";

storiesOf("Atoms", module).add(
  "CheckmarkableCircle",
  withInfo()(() => (
    <CheckmarkableCircle
      checked={boolean("Checked", true)}
      color={
        selectV2(
          "Color",
          ["primary", "secondary"],
          "primary",
        ) as CheckmarkableCircleProps["color"]
      }
    />
  )),
);
