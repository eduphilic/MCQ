import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { QuantitySlider } from ".";
import { createPlaceholderQuantitySliderProps } from "./createPlaceholderQuantitySliderProps";

storiesOf("Molecules", module).add(
  "QuantitySlider",
  withInfo()(() => {
    const props = createPlaceholderQuantitySliderProps();

    return (
      <div style={{ width: "100%", maxWidth: 800, margin: "0 auto" }}>
        <QuantitySlider {...props} />
      </div>
    );
  }),
);
