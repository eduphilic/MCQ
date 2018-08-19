import { storiesOf } from "@storybook/react";
import React from "react";

import Card from "@material-ui/core/Card";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { PlaceholderProvider } from "store";
import { ExamOverviewMobile } from "./ExamOverviewMobile";

storiesOf("Exam Taking", module).add("ExamOverviewMobile", () => {
  //

  return (
    <PlaceholderProvider>
      <ContentCenterWrapper style={{ width: 320, padding: 0, marginTop: 24 }}>
        <Card>
          <ExamOverviewMobile />
        </Card>
      </ContentCenterWrapper>
    </PlaceholderProvider>
  );
});