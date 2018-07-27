import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { entryImages } from "common/structures/entryImages";
import React from "react";

import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { DashboardTestCard } from "./DashboardTestCard";

storiesOf("Dashboard", module).add(
  "DashboardTestCard",
  withInfo()(() => {
    //

    return (
      <StorybookContentCenterWrapper>
        <DashboardTestCard
          color="yellow"
          attemptButtonLabel="Attempt"
          imageLogoUrl={entryImages.AirForce}
          title="Soldier General Duty Free Mock Test"
          subtitle="Validity 31st Jan 2019"
        />
      </StorybookContentCenterWrapper>
    );
  }),
);