import { storiesOf } from "@storybook/react";
import { drawerWidth } from "common/css/drawerWidth";
import React from "react";
import { UserAppDrawerTheme } from "theme";

import { ExamDrawerQuestionSelect } from ".";

storiesOf("Components", module).add("ExamDrawerQuestionSelect", () => {
  //

  return (
    <UserAppDrawerTheme>
      <div
        style={{ margin: 24, width: drawerWidth, backgroundColor: "#03285b" }}
      >
        <ExamDrawerQuestionSelect />
      </div>
    </UserAppDrawerTheme>
  );
});
