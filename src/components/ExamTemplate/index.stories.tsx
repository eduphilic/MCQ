import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { examPaneKeyNodeMap } from "common/structures/examPaneKeyNodeMap";
import React from "react";

import { ExamTemplate } from ".";

storiesOf("Components", module).add(
  "ExamTemplate",
  withInfo({ inline: false })(() => {
    const paneKeyNodeMap = examPaneKeyNodeMap;

    return (
      <ExamTemplate paneKeyNodeMap={paneKeyNodeMap}>Placeholder</ExamTemplate>
    );
  }),
);
