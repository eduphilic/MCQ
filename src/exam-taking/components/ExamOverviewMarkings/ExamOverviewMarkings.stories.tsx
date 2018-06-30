import { storiesOf } from "@storybook/react";
import React from "react";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { ExamOverviewMarkings } from "./ExamOverviewMarkings";

storiesOf("Exam Taking", module).add("ExamOverviewMarkings", () => {
  //

  return (
    <div style={{ display: "flex", marginTop: 24 }}>
      <ContentCenterWrapper style={{ width: "50%" }}>
        <ExamOverviewMarkings />
      </ContentCenterWrapper>
    </div>
  );
});
