import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Typography } from "components/Typography";
import { SideSheetFieldGroup } from ".";

storiesOf("Components", module).add(
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
