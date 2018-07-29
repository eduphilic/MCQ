import { storiesOf } from "@storybook/react";
import React from "react";

import { StorybookPlaceholderImage } from "components/storybook/StorybookPlaceholderImage";
import { ContentCenterWrapper } from ".";

storiesOf("Components", module).add("ContentCenterWrapper", () => (
  <div style={{ height: 500 }}>
    <ContentCenterWrapper>
      <StorybookPlaceholderImage />
    </ContentCenterWrapper>
  </div>
));
