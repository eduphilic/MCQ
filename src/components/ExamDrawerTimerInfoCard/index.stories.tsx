import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { drawerWidth } from "common/css/drawerWidth";
import React from "react";

import { ExamDrawerTimerInfoCard } from ".";

storiesOf("Components", module).add(
  "ExamDrawerTimerInfoCard",
  withInfo()(() => {
    //

    return (
      <div style={{ margin: 24, width: drawerWidth }}>
        <ExamDrawerTimerInfoCard>Placeholder</ExamDrawerTimerInfoCard>
      </div>
    );
  }),
);
