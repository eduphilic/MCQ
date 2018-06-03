import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { AttemptCourseCard } from ".";
import { createPlaceholderData } from "./createPlaceholderData";

storiesOf("Components", module).add(
  "AttemptCourseCard",
  withInfo()(() => {
    const placeholderData = createPlaceholderData(courseIndex =>
      action(`Course onClick ${courseIndex}`),
    );

    return <AttemptCourseCard {...placeholderData} />;
  }),
);
