import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ExamTemplate } from ".";

storiesOf("Components", module).add(
  "ExamTemplate",
  withInfo({ inline: false })(() => {
    //

    return <ExamTemplate>Placeholder</ExamTemplate>;
  }),
);
