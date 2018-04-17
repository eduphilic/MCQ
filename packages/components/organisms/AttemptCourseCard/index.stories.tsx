import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { AttemptCourseCard } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { createPlaceholderData } from "./createPlaceholderData";

storiesOf("Organisms", module).add(
  "AttemptCourseCard",
  withInfo({ propTablesExclude: [ContentCenterWrapper as any] })(() => {
    const placeholderData = createPlaceholderData(courseIndex =>
      action(`Course onClick ${courseIndex}`),
    );

    return (
      <ContentCenterWrapper>
        <div style={{ margin: 16 }}>
          <AttemptCourseCard {...placeholderData} />
        </div>
      </ContentCenterWrapper>
    );
  }),
);
