import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { SplitThemesPreviewer } from "components/SplitThemesPreviewer";
import React from "react";

import { Logo } from "./Logo";

storiesOf("Components", module).add("Logo", () => (
  <SplitThemesPreviewer>
    <Logo
      hideTextMobile={boolean("Hide text on mobile", false)}
      alternateSecondWordColoring={boolean("Alternate coloring", true)}
    />
  </SplitThemesPreviewer>
));
