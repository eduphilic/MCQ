import { storiesOf } from "@storybook/react";
import { drawerWidth } from "common/css/drawerWidth";
import React from "react";
import { UserAppDrawerTheme } from "theme";

import { PlaceholderProvider } from "../../placeholders/PlaceholderProvider";
import { ExamDrawerQuestionSelect } from "./ExamDrawerQuestionSelect";

storiesOf("Exam Taking", module)
  .addDecorator(story => <PlaceholderProvider>{story()}</PlaceholderProvider>)
  .add("ExamDrawerQuestionSelect", () => {
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
