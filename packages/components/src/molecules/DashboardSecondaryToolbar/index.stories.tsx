import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { DashboardSecondaryToolbar } from ".";

import { Button } from "../../atoms/Button";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { Typography } from "../../atoms/Typography";

storiesOf("Molecules", module).add(
  "DashboardSecondaryToolbar",
  withInfo()(() => {
    const buttons = Array.from({ length: 3 }, (_item, index) => (
      <Button key={index} variant="flat">
        <Typography variant="buttonBold">Button {index + 1}</Typography>
      </Button>
    ));

    return (
      <ContentCenterWrapper>
        <DashboardSecondaryToolbar>
          <DashboardSecondaryToolbar.Spacer />
          {buttons}
        </DashboardSecondaryToolbar>
      </ContentCenterWrapper>
    );
  }),
);
