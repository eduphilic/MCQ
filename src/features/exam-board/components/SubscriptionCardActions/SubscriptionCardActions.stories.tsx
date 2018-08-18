import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React, { cloneElement } from "react";

import { CardMobileFlat } from "components/CardMobileFlat";
import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { SubscriptionCardActions } from "./SubscriptionCardActions";

storiesOf("Exam Board", module).add("SubscriptionCardActions", () => {
  const onReviseButtonClick = boolean("With Revise Button", true)
    ? action("onReviseButtonClick")
    : undefined;

  const onAttemptButtonClick = boolean("With Attempt Button", true)
    ? action("onAttemptButtonClick")
    : undefined;

  const showDisabledExpiredButton = boolean("With Expired Button", true);

  const cardActions = (
    <SubscriptionCardActions
      showDisabledExpiredButton={showDisabledExpiredButton}
      onReviseButtonClick={onReviseButtonClick}
      onAttemptButtonClick={onAttemptButtonClick}
    />
  );

  const component = boolean("With Card", true)
    ? cloneElement(<CardMobileFlat />, undefined, cardActions)
    : cardActions;

  return (
    <StorybookContentCenterWrapper maxWidthPercent={50}>
      {component}
    </StorybookContentCenterWrapper>
  );
});
