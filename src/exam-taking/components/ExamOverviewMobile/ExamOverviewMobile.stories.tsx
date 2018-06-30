import { storiesOf } from "@storybook/react";
import React from "react";

import Card from "@material-ui/core/Card";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { subjects } from "../ExamOverviewBluePrint/ExamOverviewBluePrint.stories";
import { ExamOverviewMobile } from "./ExamOverviewMobile";

storiesOf("Exam Taking", module).add("ExamOverviewMobile", () => {
  //

  return (
    <ContentCenterWrapper style={{ width: 320, padding: 0, marginTop: 24 }}>
      <Card>
        <ExamOverviewMobile subjects={subjects} />
      </Card>
    </ContentCenterWrapper>
  );
});
