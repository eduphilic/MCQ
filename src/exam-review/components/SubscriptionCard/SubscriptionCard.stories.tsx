import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { entryImages } from "common/structures/entryImages";
import React from "react";

import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { SubscriptionCard, SubscriptionCardProps } from "./SubscriptionCard";

storiesOf("Exam Review", module).add("SubscriptionCard", () => {
  const props: SubscriptionCardProps = {
    title: "Solder General Duty",
    subheader: "Validity 31st Jan 2019",
    overline: "10 Mock Tests Set",
    imageUrl: entryImages.AirForce,
    onAttemptButtonClick: action("onAttemptButtonClick"),
    onReviseButtonClick: action("onReviseButtonClick"),
    stats: {
      Attempted: "02 Tests",
      Remaining: "08 Tests",
    },
  };

  return (
    <StorybookContentCenterWrapper maxWidthPercent={50}>
      <SubscriptionCard {...props} />
    </StorybookContentCenterWrapper>
  );
});
