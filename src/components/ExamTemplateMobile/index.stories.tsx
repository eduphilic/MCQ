import { storiesOf } from "@storybook/react";
import { examPaneKeyNodeMap } from "common/structures/examPaneKeyNodeMap";
import React from "react";

import { ExamTemplateMobile } from ".";

storiesOf("Components", module).add("ExamTemplateMobile", () => {
  const paneKeyNodeMap = examPaneKeyNodeMap;

  return (
    <ExamTemplateMobile paneKeyNodeMap={paneKeyNodeMap}>
      Placeholder
    </ExamTemplateMobile>
  );
});
