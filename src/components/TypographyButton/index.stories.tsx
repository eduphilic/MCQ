import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { TypographyButton } from ".";

storiesOf("Components", module).add(
  "TypographyButton",
  withInfo()(() => {
    //

    return <TypographyButton>Button with Typography</TypographyButton>;
  }),
);
