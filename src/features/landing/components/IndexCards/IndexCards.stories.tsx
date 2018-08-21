import { storiesOf } from "@storybook/react";
import React from "react";
import { PlaceholderProvider } from "store";

import { StorybookContentCenterWrapper } from "componentsV0/storybook/StorybookContentCenterWrapper";
import { IndexCards } from "./IndexCards";

storiesOf("Landing", module)
  .addDecorator(story => <PlaceholderProvider>{story()}</PlaceholderProvider>)
  .addDecorator(story => (
    <StorybookContentCenterWrapper style={{ backgroundColor: "#f2f2f2" }}>
      {story()}
    </StorybookContentCenterWrapper>
  ))
  .add("IndexCards", () => {
    //

    return <IndexCards />;
  });
