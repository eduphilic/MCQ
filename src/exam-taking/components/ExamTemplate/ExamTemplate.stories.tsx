import { storiesOf } from "@storybook/react";
import { examPaneKeyNodeMap } from "common/structures/examPaneKeyNodeMap";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { PlaceholderProvider } from "store";
import { ExamTemplate } from "./ExamTemplate";

storiesOf("Exam Taking", module)
  .addParameters({ info: { inline: false } })
  .addDecorator(story => <PlaceholderProvider>{story()}</PlaceholderProvider>)
  .add("ExamTemplate", () => {
    const paneKeyNodeMap = examPaneKeyNodeMap;

    return (
      <BrowserRouter>
        <ExamTemplate paneKeyNodeMap={paneKeyNodeMap}>Placeholder</ExamTemplate>
      </BrowserRouter>
    );
  });
