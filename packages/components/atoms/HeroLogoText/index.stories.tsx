import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { HeroLogoText } from ".";
import { SplitThemesPreviewer } from "../../organisms/SplitThemesPreviewer";

storiesOf("Atoms", module).add(
  "HeroLogoText",
  withInfo()(() => (
    <SplitThemesPreviewer>
      <HeroLogoText />
    </SplitThemesPreviewer>
  )),
);
