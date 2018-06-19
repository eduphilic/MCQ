import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { examPaneKeyNodeMap } from "common/structures/examPaneKeyNodeMap";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ExamTemplate } from ".";

storiesOf("Components", module).add(
  "ExamTemplate",
  withInfo({ inline: false })(() => {
    const paneKeyNodeMap = examPaneKeyNodeMap;

    return (
      <BrowserRouter>
        <ExamTemplate paneKeyNodeMap={paneKeyNodeMap}>Placeholder</ExamTemplate>
      </BrowserRouter>
    );
  }),
);
