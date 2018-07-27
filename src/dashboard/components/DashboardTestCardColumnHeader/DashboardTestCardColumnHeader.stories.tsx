import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { DashboardTestCardColumnHeader } from "./DashboardTestCardColumnHeader";

storiesOf("Dashboard", module).add(
  "DashboardTestCardColumnHeader",
  withInfo()(() => {
    //

    return (
      <StorybookContentCenterWrapper>
        <DashboardTestCardColumnHeader
          icon="exam"
          // imageLogoUrl={entryImages.AirForce}
          title="Paid Exams"
        >
          <div>Card Contents</div>
        </DashboardTestCardColumnHeader>
      </StorybookContentCenterWrapper>
    );
  }),
);