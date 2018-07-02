import { storiesOf } from "@storybook/react";
import React from "react";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { PlaceholderProvider } from "../../placeholders/PlaceholderProvider";
import { ExamOverviewMarkings } from "./ExamOverviewMarkings";

const stories = storiesOf("Exam Taking", module);

stories.addDecorator(story => (
  <PlaceholderProvider>{story()}</PlaceholderProvider>
));

stories.add("ExamOverviewMarkings", () => {
  //

  return (
    <div style={{ display: "flex", marginTop: 24 }}>
      <ContentCenterWrapper style={{ width: "50%" }}>
        <ExamOverviewMarkings />
      </ContentCenterWrapper>
    </div>
  );
});
