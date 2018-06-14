import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { landingAttemptCourseCards } from "common/structures/landingAttemptCourseCards";

storiesOf("Components", module).add(
  "AttemptCourseCard",
  withInfo()(() => {
    const cards = landingAttemptCourseCards({
      courseOnClick: courseIndex => action(`Course onClick ${courseIndex}`),
    });

    return cards[0] as React.ReactElement<any>;
  }),
);
