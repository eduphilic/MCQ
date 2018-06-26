import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { storybookPlaceholderImageUrl } from "components/storybook/storybookPlaceholderImageUrl";
import { BlockImage } from "./BlockImage";

storiesOf("Components", module).add(
  "BlockImage",
  withInfo()(() => {
    const src = storybookPlaceholderImageUrl;

    return (
      <StorybookContentCenterWrapper>
        <BlockImage src={src} />
      </StorybookContentCenterWrapper>
    );
  }),
);
