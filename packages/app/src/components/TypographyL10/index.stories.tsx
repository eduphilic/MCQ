import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { TypographyL10 } from ".";

storiesOf("Components", module).add(
  "TypographyL10",
  withInfo()(() => {
    //

    return (
      <TypographyL10
        replaceValues={["Some field"]}
        localizationKey="formFieldIsRequired"
      />
    );
  }),
);
