import { storiesOf } from "@storybook/react";
import { drawerWidth } from "css";
import React from "react";

import { ExamDrawerQuestionPalette } from ".";

storiesOf("Exam Taking", module).add("ExamDrawerQuestionPalette", () => {
  //

  return (
    <div style={{ margin: 24, width: drawerWidth }}>
      <ExamDrawerQuestionPalette />
    </div>
  );
});
