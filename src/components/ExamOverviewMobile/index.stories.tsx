import { storiesOf } from "@storybook/react";
import React from "react";

import Card from "@material-ui/core/Card";

import { ExamOverviewMobile } from ".";
import { ContentCenterWrapper } from "../ContentCenterWrapper";

storiesOf("Components", module).add("ExamOverviewMobile", () => {
  //

  return (
    <ContentCenterWrapper style={{ width: 320, marginTop: 24 }}>
      <Card>
        <ExamOverviewMobile />
      </Card>
    </ContentCenterWrapper>
  );
});
