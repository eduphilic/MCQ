import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { SplitThemesPreviewer } from "componentsV0/SplitThemesPreviewer";
import React from "react";

import { Logo } from "./Logo";

storiesOf("Components V0", module).add("Logo", () => (
  <SplitThemesPreviewer>
    <Logo
      hideTextMobile={boolean("Hide text on mobile", false)}
      alternateSecondWordColoring={boolean("Alternate coloring", true)}
    />
  </SplitThemesPreviewer>
));
