import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { SideSheetSearchField } from ".";

storiesOf("Molecules", module).add(
  "SideSheetSearchField",
  withInfo()(() => {
    //

    return (
      <SideSheetSearchField
        label="Search Users"
        placeholder="Search for users here..."
        onSubmit={action("onSubmit")}
      />
    );
  }),
);
