import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { SplitThemesPreviewer } from "components/SplitThemesPreviewer/index";
import { LanguageSelect } from "./LanguageSelect";

storiesOf("Landing", module).add(
  "LanguageSelect",

  withInfo()(() => (
    <SplitThemesPreviewer>
      <LanguageSelect />
    </SplitThemesPreviewer>
  )),
);
