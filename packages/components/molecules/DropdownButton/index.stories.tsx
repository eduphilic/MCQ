import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DropdownButton } from ".";
import { Typography } from "../../atoms/Typography";

storiesOf("Molecules", module).add(
  "DropdownButton",
  withInfo()(() => {
    //

    return (
      <DropdownButton>
        <Typography>Dropdown Button</Typography>
      </DropdownButton>
    );
  }),
);
