import { storiesOf } from "@storybook/react";
import React from "react";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { ExamOverviewBluePrint } from ".";

storiesOf("Components", module).add("ExamOverviewBluePrint", () => {
  //

  return (
    <ContentCenterWrapper style={{ display: "flex", marginTop: 24 }}>
      <ExamOverviewBluePrint />
      <div style={{ width: "50%" }} />
    </ContentCenterWrapper>
  );
});
