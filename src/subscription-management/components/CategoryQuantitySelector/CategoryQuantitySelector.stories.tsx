import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { createCategoryQuantitySelectionSettingsPlaceholder } from "../../placeholders/createCategoryQuantitySelectionSettingsPlaceholder";
import { CategoryQuantitySelector } from "./CategoryQuantitySelector";

const categoryQuantitySelectionSettings = createCategoryQuantitySelectionSettingsPlaceholder();

storiesOf("Subscription Management", module).add(
  "CategoryQuantitySelector",
  withInfo()(() => {
    const selectedQuantityIndex = number("selectedQuantityIndex", 0, {
      min: 0,
      max: 3,
      step: 1,
      range: false,
    });

    return (
      <StorybookContentCenterWrapper>
        <CategoryQuantitySelector
          categoryQuantitySelectionSettings={categoryQuantitySelectionSettings}
          categoryLabel={{ en: "Sol GD" }}
          selectedQuantityIndex={selectedQuantityIndex}
          onChange={action("onChange")}
        />
      </StorybookContentCenterWrapper>
    );
  }),
);
