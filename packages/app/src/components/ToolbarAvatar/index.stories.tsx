import { withInfo } from "@storybook/addon-info";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { ToolbarAvatar } from ".";
import placeholderJpg from "./placeholder.jpg";

storiesOf("Components", module).add(
  "ToolbarAvatar",
  withInfo()(() => {
    const useImage = boolean("Use Image", true);

    return (
      <ToolbarAvatar
        name={text("Name", "Remy Sharp")}
        letters={useImage ? undefined : text("Letters", "RS")}
        imgSrc={useImage ? placeholderJpg : undefined}
      />
    );
  }),
);
