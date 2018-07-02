import { storiesOf } from "@storybook/react";
import React from "react";

import { PlaceholderProvider } from "../../placeholders/PlaceholderProvider";
import { ExamAppBar } from "./ExamAppBar";

storiesOf("Exam Taking", module)
  .addDecorator(story => <PlaceholderProvider>{story()}</PlaceholderProvider>)
  .add("ExamAppBar", () => {
    //

    return <ExamAppBar />;
  });
