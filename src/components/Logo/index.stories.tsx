import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { SplitThemesPreviewer } from "components/SplitThemesPreviewer";
import React from "react";
import { Logo } from ".";

storiesOf("Components", module).add(
  "Logo",
  withInfo()(() => (
    <SplitThemesPreviewer>
      <Logo hideTextMobile={boolean("Hide text on mobile", false)} />
    </SplitThemesPreviewer>
  )),
);