import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Logo } from ".";
import { SplitThemesPreviewer } from "../../organisms/SplitThemesPreviewer";

storiesOf("Molecules", module).add(
  "Logo",
  withInfo()(() => (
    <SplitThemesPreviewer>
      <Logo hideTextMobile={boolean("Hide text on mobile", false)} />
    </SplitThemesPreviewer>
  )),
);
