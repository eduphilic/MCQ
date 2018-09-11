import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React, { cloneElement } from "react";

import { Card } from "components/Card";
import { StorybookContentCenterWrapper } from "componentsV0/storybook/StorybookContentCenterWrapper";
import { SubscriptionCardActions } from "./SubscriptionCardActions";

storiesOf("Exam Board", module).add("SubscriptionCardActions", () => {
  const reviewButtonLinkComponent = boolean("With Revise Button", true)
    ? (props: any) => <div onClick={action("onReviseButtonClick")} {...props} />
    : undefined;

  const onAttemptButtonClick = boolean("With Attempt Button", true)
    ? action("onAttemptButtonClick")
    : undefined;

  const showDisabledExpiredButton = boolean("With Expired Button", true);

  const cardActions = (
    <SubscriptionCardActions
      showDisabledExpiredButton={showDisabledExpiredButton}
      reviewButtonLinkComponent={reviewButtonLinkComponent}
      onAttemptButtonClick={onAttemptButtonClick}
    />
  );

  const component = boolean("With Card", true)
    ? cloneElement(<Card />, undefined, cardActions)
    : cardActions;

  return (
    <StorybookContentCenterWrapper maxWidthPercent={50}>
      {component}
    </StorybookContentCenterWrapper>
  );
});
