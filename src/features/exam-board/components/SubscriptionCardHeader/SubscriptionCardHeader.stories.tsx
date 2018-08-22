import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { entryImages } from "common/structures/entryImages";
import React, { cloneElement } from "react";

import { Card } from "components/Card";
import { StorybookContentCenterWrapper } from "componentsV0/storybook/StorybookContentCenterWrapper";
import { SubscriptionCardHeader } from "./SubscriptionCardHeader";

storiesOf("Exam Board", module).add("SubscriptionCardHeader", () => {
  const withOverline = boolean("With Overline", true);
  const CardComponent = boolean("With Card", true) ? Card : null;

  const component = (
    <SubscriptionCardHeader
      title="Soldier General Duty"
      subheader="Validity 31st Jan 2019"
      overline={withOverline ? "10 Mock Tests Set" : undefined}
      imageUrl={entryImages.AirForce}
    />
  );

  const wrappedComponent = CardComponent
    ? cloneElement(<CardComponent />, undefined, component)
    : component;

  return (
    <StorybookContentCenterWrapper maxWidthPercent={50}>
      {wrappedComponent}
    </StorybookContentCenterWrapper>
  );
});
