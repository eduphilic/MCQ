import React, { SFC } from "react";

import { CardMobileFlat } from "components/CardMobileFlat";
import {
  SubscriptionCardActions,
  SubscriptionCardActionsProps,
} from "../SubscriptionCardActions";
import {
  SubscriptionCardContent,
  SubscriptionCardContentProps,
} from "../SubscriptionCardContent";
import {
  SubscriptionCardHeader,
  SubscriptionCardHeaderProps,
} from "../SubscriptionCardHeader";

export type SubscriptionCardProps = SubscriptionCardActionsProps &
  SubscriptionCardContentProps &
  SubscriptionCardHeaderProps;

export const SubscriptionCard: SFC<SubscriptionCardProps> = props => {
  return (
    <CardMobileFlat>
      <SubscriptionCardHeader {...props} />
      <SubscriptionCardContent {...props} />
      <SubscriptionCardActions {...props} />
    </CardMobileFlat>
  );
};
