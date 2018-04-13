import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { HeroLogo } from ".";
import { SplitThemesPreviewer } from "../../organisms/SplitThemesPreviewer";

storiesOf("Molecules", module).add(
  "HeroLogo",
  withInfo()(() => (
    <SplitThemesPreviewer>
      <HeroLogo />
    </SplitThemesPreviewer>
  )),
);
