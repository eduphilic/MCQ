import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React, { cloneElement } from "react";

import { Card } from "components/Card";
import { StorybookContentCenterWrapper } from "componentsV0/storybook/StorybookContentCenterWrapper";
import { SubscriptionCardContent } from "./SubscriptionCardContent";

storiesOf("Exam Board", module).add("SubscriptionCardContent", () => {
  const stats = {
    Attempted: "02 Tests",
    Remaining: "08 Tests",
  };

  const cardContent = <SubscriptionCardContent stats={stats} />;

  const component = boolean("With Card", true)
    ? cloneElement(<Card />, undefined, cardContent)
    : cardContent;

  return (
    <StorybookContentCenterWrapper maxWidthPercent={50}>
      {component}
    </StorybookContentCenterWrapper>
  );
});
