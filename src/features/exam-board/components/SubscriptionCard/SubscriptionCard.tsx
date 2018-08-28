import React, { SFC } from "react";

import { Card } from "components/Card";
import { CardActionArea } from "components/CardActionArea";
import { CardHeader, CardHeaderProps } from "components/CardHeader";
import {
  SubscriptionCardActions,
  SubscriptionCardActionsProps,
} from "../SubscriptionCardActions";
import {
  SubscriptionCardContent,
  SubscriptionCardContentProps,
} from "../SubscriptionCardContent";

export type SubscriptionCardProps = SubscriptionCardActionsProps &
  SubscriptionCardContentProps &
  CardHeaderProps & {
    /**
     * Called when the top action area (header and content) is clicked. When
     * this callback is provided, the area is clickable and a cursor is applied.
     */
    onClick?: () => void;
  };

export const SubscriptionCard: SFC<SubscriptionCardProps> = props => {
  const { onClick, ...rest } = props;

  return (
    <Card hoverable={!!onClick}>
      <CardActionArea onClick={onClick}>
        <CardHeader {...rest} />
        <SubscriptionCardContent {...rest} />
      </CardActionArea>
      <SubscriptionCardActions {...rest} />
    </Card>
  );
};
