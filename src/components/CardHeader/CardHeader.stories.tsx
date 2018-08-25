import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { entryImages } from "common/structures/entryImages";
import React, { cloneElement } from "react";

import { Card } from "components/Card";
import { StorybookContentCenterWrapper } from "componentsV0/storybook/StorybookContentCenterWrapper";
import { CardHeader } from "./CardHeader";

storiesOf("Components", module).add("CardHeader", () => {
  const withSubheader = boolean("With Subheader", true);
  const withImage = boolean("With Image", true);
  const withOverline = boolean("With Overline", true);
  const CardComponent = boolean("With Card", true) ? Card : null;

  const component = (
    <CardHeader
      title="Soldier General Duty"
      subheader={withSubheader ? "Validity 31st Jan 2019" : undefined}
      overline={withOverline ? "10 Mock Tests Set" : undefined}
      imageUrl={withImage ? entryImages.AirForce : undefined}
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