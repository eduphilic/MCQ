import { storiesOf } from "@storybook/react";
import { drawerWidth } from "common/css/drawerWidth";
import React from "react";

import { ExamDrawerQuestionPalette } from ".";

storiesOf("Components", module).add("ExamDrawerQuestionPalette", () => {
  //

  return (
    <div style={{ margin: 24, width: drawerWidth }}>
      <ExamDrawerQuestionPalette />
    </div>
  );
});
