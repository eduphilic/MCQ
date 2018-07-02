import { storiesOf } from "@storybook/react";
import React from "react";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { PlaceholderProvider } from "../../placeholders/PlaceholderProvider";
import { ExamOverviewBluePrint } from "./ExamOverviewBluePrint";

const stories = storiesOf("Exam Taking", module);

stories.addDecorator(story => (
  <PlaceholderProvider>{story()}</PlaceholderProvider>
));

stories.add("ExamOverviewBluePrint", () => {
  //

  return (
    <ContentCenterWrapper style={{ display: "flex", marginTop: 24 }}>
      <ExamOverviewBluePrint />
      <div style={{ width: "50%" }} />
    </ContentCenterWrapper>
  );
});
