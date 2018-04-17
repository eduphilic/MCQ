import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DarkTheme } from "theme";
import { HeroFooter } from ".";

storiesOf("Molecules", module).add(
  "HeroFooter",
  withInfo()(() => (
    <DarkTheme>
      <HeroFooter />
    </DarkTheme>
  )),
);
