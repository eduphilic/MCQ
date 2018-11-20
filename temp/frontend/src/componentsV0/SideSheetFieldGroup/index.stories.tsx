import { storiesOf } from "@storybook/react";
import React from "react";

import { Typography } from "componentsV0/Typography";
import { SideSheetFieldGroup } from ".";

storiesOf("Components V0", module).add("SideSheetFieldGroup", () => {
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
});
