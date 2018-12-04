import { storiesOf } from "@storybook/react";
import React from "react";
import { LoadingSpinner, LoadingSpinnerProvider } from "./LoadingSpinner";

const stories = storiesOf("LoadingSpinner", module);

stories.add("default", () => (
  <LoadingSpinnerProvider
    transitionDelay={0}
    src1_0x="https://placekitten.com/72/72"
    src1_5x="https://placekitten.com/105/105"
    src2_0x="https://placekitten.com/144/144"
  >
    <LoadingSpinner />
  </LoadingSpinnerProvider>
));
