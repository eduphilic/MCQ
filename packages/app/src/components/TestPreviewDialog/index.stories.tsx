import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { TypographyButton } from "components/TypographyButton";
import { TestPreviewDialog } from ".";
import { createPlaceholderTestPreviewFieldsProp } from "./createPlaceholderTestPreviewFieldsProp";

storiesOf("Components", module).add(
  "TestPreviewDialog",
  withInfo({ propTablesExclude: [ContentCenterWrapper, TypographyButton] })(
    () => {
      const fields = createPlaceholderTestPreviewFieldsProp();

      return (
        <ContentCenterWrapper>
          <TestPreviewDialog fields={fields}>
            <TypographyButton>Open Dialog</TypographyButton>
          </TestPreviewDialog>
        </ContentCenterWrapper>
      );
    },
  ),
);
