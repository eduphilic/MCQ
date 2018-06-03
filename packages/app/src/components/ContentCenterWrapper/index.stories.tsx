import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { ContentCenterWrapper } from ".";
import { PlaceholderImage } from "../PlaceholderImage";

storiesOf("Components", module).add(
  "ContentCenterWrapper",
  withInfo()(() => (
    <div style={{ height: 500 }}>
      <ContentCenterWrapper>
        <PlaceholderImage />
      </ContentCenterWrapper>
    </div>
  )),
);
