import React, { SFC } from "react";
import styled from "styled";

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
  SubscriptionCardHeaderProps & {
    /**
     * Called when the top action area (header and content) is clicked. When
     * this callback is provided, the area is clickable and a cursor is applied.
     */
    onClick?: () => void;
  };

export const SubscriptionCard: SFC<SubscriptionCardProps> = props => {
  const { onClick, ...rest } = props;

  return (
    <CardMobileFlat>
      <ActionArea onClick={onClick}>
        <SubscriptionCardHeader {...rest} />
        <SubscriptionCardContent {...rest} />
      </ActionArea>
      <SubscriptionCardActions {...rest} />
    </CardMobileFlat>
  );
};

const ActionArea = styled.div`
  ${({ onClick }) => onClick && "cursor: pointer"};
`;
