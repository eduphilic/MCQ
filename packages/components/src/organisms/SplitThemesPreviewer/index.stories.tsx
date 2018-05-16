import Typography from "@material-ui/core/Typography";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { SplitThemesPreviewer } from ".";

storiesOf("Organisms", module).add(
  "SplitThemesPreviewer",
  withInfo()(() => (
    <SplitThemesPreviewer>
      <Typography variant="headline">Themed Text</Typography>
    </SplitThemesPreviewer>
  )),
);