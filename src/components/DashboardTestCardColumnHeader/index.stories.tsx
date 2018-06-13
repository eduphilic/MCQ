import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
// import { entryImages } from "common/structures/entryImages";
import React from "react";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { DashboardTestCardColumnHeader } from ".";

storiesOf("Components", module).add(
  "DashboardTestCardColumnHeader",
  withInfo()(() => {
    //

    return (
      <ContentCenterWrapper>
        <DashboardTestCardColumnHeader
          icon="exam"
          // imageLogoUrl={entryImages.AirForce}
          title="Paid Exams"
        >
          <div>Card Contents</div>
        </DashboardTestCardColumnHeader>
      </ContentCenterWrapper>
    );
  }),
);
