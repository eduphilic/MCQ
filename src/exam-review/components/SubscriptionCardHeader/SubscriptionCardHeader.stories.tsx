import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { entryImages } from "common/structures/entryImages";
import React, { cloneElement } from "react";

import { CardMobileFlat } from "components/CardMobileFlat";
import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { SubscriptionCardHeader } from "./SubscriptionCardHeader";

storiesOf("Exam Review", module).add("SubscriptionCardHeader", () => {
  const withOverline = boolean("With Overline", true);
  const Card = boolean("With Card", true) ? CardMobileFlat : null;

  const component = (
    <SubscriptionCardHeader
      title="Soldier General Duty"
      subheader="Validity 31st Jan 2019"
      overline={withOverline ? "10 Mock Tests Set" : undefined}
      imageUrl={entryImages.AirForce}
    />
  );

  const wrappedComponent = Card
    ? cloneElement(<Card />, undefined, component)
    : component;

  return (
    <StorybookContentCenterWrapper maxWidthPercent={50}>
      {wrappedComponent}
    </StorybookContentCenterWrapper>
  );
});
