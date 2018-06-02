import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { TestPreviewDialog } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { TypographyButton } from "../../molecules/TypographyButton";
import { createPlaceholderTestPreviewFieldsProp } from "./createPlaceholderTestPreviewFieldsProp";

storiesOf("Organisms", module).add(
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
