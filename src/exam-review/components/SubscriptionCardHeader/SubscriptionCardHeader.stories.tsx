import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { entryImages } from "common/structures/entryImages";
import React from "react";

import { CardMobileFlat } from "components/CardMobileFlat";
import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { SubscriptionCardHeader } from "./SubscriptionCardHeader";

storiesOf("Exam Review", module)
  .addDecorator(story => <CardMobileFlat>{story()}</CardMobileFlat>)
  .addDecorator(story => (
    <StorybookContentCenterWrapper maxWidthPercent={50}>
      {story()}
    </StorybookContentCenterWrapper>
  ))
  .add("SubscriptionCardHeader", () => {
    const withOverline = boolean("With Overline", true);

    return (
      <SubscriptionCardHeader
        title="Soldier General Duty"
        subheader="Validity 31st Jan 2019"
        overline={withOverline ? "10 Mock Tests Set" : undefined}
        imageUrl={entryImages.AirForce}
      />
    );
  });
