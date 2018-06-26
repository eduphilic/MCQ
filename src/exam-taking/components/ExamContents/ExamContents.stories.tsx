import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ExamContents } from "./ExamContents";
import placeholderImage350x150Png from "./placeholder-image-350x150.png";

storiesOf("Exam Taking", module).add("ExamContents", () => {
  const isHorizontal = boolean("Horizontal", true);
  const withImage = boolean("With Image", true);

  const orientation = isHorizontal ? "horizontal" : "vertical";
  const questionImageUrl = withImage ? placeholderImage350x150Png : undefined;

  return (
    <ExamContents
      orientation={orientation}
      questionImageUrl={questionImageUrl}
    />
  );
});
