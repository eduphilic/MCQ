import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { SideSheetFieldGroup } from ".";
import { Typography } from "../../atoms/Typography";

storiesOf("Molecules", module).add(
  "SideSheetFieldGroup",
  withInfo()(() => {
    //

    return (
      <>
        <SideSheetFieldGroup fieldGroupTitle="Field 1">
          <Typography>Some Field</Typography>
          <Typography>Some Field</Typography>
        </SideSheetFieldGroup>
        <SideSheetFieldGroup fieldGroupTitle="Field 2">
          <Typography>Some Field</Typography>
          <Typography>Some Field</Typography>
        </SideSheetFieldGroup>
      </>
    );
  }),
);
