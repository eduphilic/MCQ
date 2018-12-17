import { storiesOf } from "@storybook/react";
import React from "react";
import { LoadingSpinner, LoadingSpinnerProvider } from "./LoadingSpinner";
import { storiesProps } from "./storiesProps";

const stories = storiesOf("LoadingSpinner", module);

stories.add("default", () => (
  <LoadingSpinnerProvider {...storiesProps}>
    <LoadingSpinner />
  </LoadingSpinnerProvider>
));
