import { storiesOf } from "@storybook/react";
import { drawerWidth } from "css";
import React from "react";
import { UserAppDrawerTheme } from "theme";

import { ExamDrawerPerformanceAnalysis } from "./ExamDrawerPerformanceAnalysis";

const stories = storiesOf("Exam Taking", module);

stories.addDecorator(story => (
  <div style={{ margin: 24, width: drawerWidth, backgroundColor: "#03285b" }}>
    <UserAppDrawerTheme>{story()}</UserAppDrawerTheme>
  </div>
));

stories.add("ExamDrawerPerformanceAnalysis", () => {
  //

  return <ExamDrawerPerformanceAnalysis />;
});
