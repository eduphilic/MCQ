import { storiesOf } from "@storybook/react";
import React from "react";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { PlaceholderProvider } from "../../placeholders/PlaceholderProvider";
import { ExamBottomNavFrame } from "./ExamBottomNavFrame";

storiesOf("Exam Taking", module)
  .addDecorator(story => <PlaceholderProvider>{story()}</PlaceholderProvider>)
  .add("ExamBottomNavFrame", () => {
    //

    return (
      <ContentCenterWrapper>
        <ExamBottomNavFrame>
          <div>Page Contents</div>
        </ExamBottomNavFrame>
      </ContentCenterWrapper>
    );
  });
