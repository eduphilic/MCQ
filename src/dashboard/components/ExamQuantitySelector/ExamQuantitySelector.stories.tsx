import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { createExamQuantitySelectMetaPlaceholder } from "../../placeholders/createExamQuantitySelectMetaPlaceholder";
import { ExamQuantitySelector } from "./ExamQuantitySelector";

const examQuantitySelectMeta = createExamQuantitySelectMetaPlaceholder();

storiesOf("Dashboard", module).add(
  "ExamQuantitySelector",
  withInfo()(() => {
    const selectedQuantityIndex = number("selectedQuantityIndex", 0, {
      min: 0,
      max: 3,
      step: 1,
      range: false,
    });

    return (
      <StorybookContentCenterWrapper>
        <ExamQuantitySelector
          examQuantitySelectMeta={examQuantitySelectMeta}
          categoryLabel={{ en: "Sol GD" }}
          selectedQuantityIndex={selectedQuantityIndex}
          onChange={action("onChange")}
        />
      </StorybookContentCenterWrapper>
    );
  }),
);
