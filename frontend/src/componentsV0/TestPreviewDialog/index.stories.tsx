import { storiesOf } from "@storybook/react";
import React from "react";

import { ContentCenterWrapper } from "componentsV0/ContentCenterWrapper";
import { TypographyButton } from "componentsV0/TypographyButton";
import { TestPreviewDialog } from ".";
import { createPlaceholderTestPreviewFieldsProp } from "./createPlaceholderTestPreviewFieldsProp";

storiesOf("Components V0", module)
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
