import { storiesOf } from "@storybook/react";
import { examPaneKeyNodeMap } from "common/structures/examPaneKeyNodeMap";
import React from "react";

import { PlaceholderProvider } from "../../placeholders/PlaceholderProvider";
import { ExamTemplateMobile } from "./ExamTemplateMobile";

storiesOf("Exam Taking", module)
  .addDecorator(story => <PlaceholderProvider>{story()}</PlaceholderProvider>)
  .add("ExamTemplateMobile", () => {
    const paneKeyNodeMap = examPaneKeyNodeMap;

    return (
      <ExamTemplateMobile paneKeyNodeMap={paneKeyNodeMap}>
        Placeholder
      </ExamTemplateMobile>
    );
  });
