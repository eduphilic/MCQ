import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { entryImages } from "common/structures/entryImages";
import React from "react";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { DashboardTestCard } from ".";

storiesOf("Components", module).add(
  "DashboardTestCard",
  withInfo()(() => {
    //

    return (
      <ContentCenterWrapper>
        <DashboardTestCard
          color="yellow"
          attemptButtonLabel="Attempt"
          imageLogoUrl={entryImages.AirForce}
          title="Soldier General Duty Free Mock Test"
          subtitle="Validity 31st Jan 2019"
        />
      </ContentCenterWrapper>
    );
  }),
);
