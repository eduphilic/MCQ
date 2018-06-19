import { storiesOf } from "@storybook/react";
import React from "react";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { ExamBottomNavFrame } from ".";

storiesOf("Components", module).add("ExamBottomNavFrame", () => {
  //

  return (
    <ContentCenterWrapper>
      <ExamBottomNavFrame>
        <div>Page Contents</div>
      </ExamBottomNavFrame>
    </ContentCenterWrapper>
  );
});
