import { storiesOf } from "@storybook/react";
import React from "react";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { ExamBluePrint } from ".";

storiesOf("Components", module).add("ExamBluePrint", () => {
  //

  return (
    <ContentCenterWrapper style={{ display: "flex", marginTop: 24 }}>
      <ExamBluePrint />
      <div style={{ width: "50%" }} />
    </ContentCenterWrapper>
  );
});
