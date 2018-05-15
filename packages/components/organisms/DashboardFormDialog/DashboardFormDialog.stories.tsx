import { storiesOf } from "@storybook/react";
import React from "react";

import { DashboardFormDialog } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { TypographyButton } from "../../molecules/TypographyButton";

storiesOf("Organisms", module).add("DashboardFormDialog", () => {
  //

  return (
    <ContentCenterWrapper>
      <DashboardFormDialog>
        <TypographyButton>Open Modal</TypographyButton>
      </DashboardFormDialog>
    </ContentCenterWrapper>
  );
});
