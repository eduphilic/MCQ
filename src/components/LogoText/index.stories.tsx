import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { SplitThemesPreviewer } from "components/SplitThemesPreviewer";
import React from "react";
import { LogoText } from ".";

storiesOf("Components", module).add(
  "LogoText",
  withInfo({ propTablesExclude: [SplitThemesPreviewer as any] })(() => (
    <SplitThemesPreviewer>
      <LogoText />
    </SplitThemesPreviewer>
  )),
);
