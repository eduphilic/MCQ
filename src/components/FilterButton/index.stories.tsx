import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { FilterButton } from ".";
import { createPlaceholderFilterButtonProps } from "./createPlaceholderFilterButtonProps";

storiesOf("Components", module).add(
  "FilterButton",
  withInfo()(() => {
    const props = createPlaceholderFilterButtonProps();

    return <FilterButton {...props} onChange={action("onChange")} />;
  }),
);
