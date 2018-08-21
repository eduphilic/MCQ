import { storiesOf } from "@storybook/react";
import React from "react";

import { StorybookContentCenterWrapper } from "componentsV0/storybook/StorybookContentCenterWrapper";
import { storybookPlaceholderImageUrl } from "componentsV0/storybook/storybookPlaceholderImageUrl";
import { BlockImage } from "./BlockImage";

storiesOf("Components", module).add("BlockImage", () => {
  const src = storybookPlaceholderImageUrl;

  return (
    <StorybookContentCenterWrapper>
      <BlockImage src={src} />
    </StorybookContentCenterWrapper>
  );
});
