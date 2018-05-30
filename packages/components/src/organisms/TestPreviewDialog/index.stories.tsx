import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { TestPreviewDialog } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { TypographyButton } from "../../molecules/TypographyButton";

storiesOf("Organisms", module).add(
  "TestPreviewDialog",
  withInfo({ propTablesExclude: [ContentCenterWrapper, TypographyButton] })(
    () => {
      //

      return (
        <ContentCenterWrapper>
          <TestPreviewDialog>
            <TypographyButton>Open Dialog</TypographyButton>
          </TestPreviewDialog>
        </ContentCenterWrapper>
      );
    },
  ),
);
