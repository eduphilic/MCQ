import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { entryImages } from "common/structures/entryImages";
import React from "react";

import { StorybookContentCenterWrapper } from "componentsV0/storybook/StorybookContentCenterWrapper";
import { SubscriptionCard, SubscriptionCardProps } from "./SubscriptionCard";

storiesOf("Exam Board", module).add("SubscriptionCard", () => {
  const props: SubscriptionCardProps = {
    title: "Solder General Duty",
    subheader: "Validity 31st Jan 2019",
    overline: "10 Mock Tests Set",
    imageUrl: entryImages.AirForce,
    onAttemptButtonClick: action("onAttemptButtonClick"),
    reviewButtonLinkComponent: (p: any) => (
      <div onClick={action("onReviseButtonClick")} {...p} />
    ),
    stats: {
      Attempted: "02 Tests",
      Remaining: "08 Tests",
    },
    onClick: boolean("Clickable", true) ? action("onClick") : undefined,
  };

  return (
    <StorybookContentCenterWrapper maxWidthPercent={50}>
      <SubscriptionCard {...props} />
    </StorybookContentCenterWrapper>
  );
});
