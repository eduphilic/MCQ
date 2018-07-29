import { storiesOf } from "@storybook/react";
import { Typography } from "components/Typography";
import React from "react";
import { DropdownButton } from ".";

storiesOf("Components", module).add("DropdownButton", () => {
  //

  return (
    <DropdownButton>
      <Typography>Dropdown Button</Typography>
    </DropdownButton>
  );
});
