import { storiesOf } from "@storybook/react";
import React from "react";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { TypographyButton } from "components/TypographyButton";
import { TestPreviewDialog } from ".";
import { createPlaceholderTestPreviewFieldsProp } from "./createPlaceholderTestPreviewFieldsProp";

storiesOf("Components", module)
  .addParameters({
    info: { propTablesExclude: [ContentCenterWrapper, TypographyButton] },
  })
  .add("TestPreviewDialog", () => {
    const fields = createPlaceholderTestPreviewFieldsProp();

    return (
      <ContentCenterWrapper>
        <TestPreviewDialog fields={fields}>
          <TypographyButton>Open Dialog</TypographyButton>
        </TestPreviewDialog>
      </ContentCenterWrapper>
    );
  });
