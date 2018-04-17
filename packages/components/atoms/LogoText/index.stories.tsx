import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { LogoText } from ".";
import { SplitThemesPreviewer } from "../../organisms/SplitThemesPreviewer";

storiesOf("Atoms", module).add(
  "LogoText",
  withInfo({ propTablesExclude: [SplitThemesPreviewer as any] })(() => (
    <SplitThemesPreviewer>
      <LogoText />
    </SplitThemesPreviewer>
  )),
);
