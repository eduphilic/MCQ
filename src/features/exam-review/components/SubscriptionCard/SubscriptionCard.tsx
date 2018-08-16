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
    <StyledCardMobileFlat hoverable={!!onClick}>
      <ActionArea onClick={onClick}>
        <SubscriptionCardHeader {...rest} />
        <SubscriptionCardContent {...rest} />
      </ActionArea>
      <SubscriptionCardActions {...rest} />
    </StyledCardMobileFlat>
  );
};

const StyledCardMobileFlat = styled<{ className?: string; hoverable: boolean }>(
  ({ className, children }) => (
    <CardMobileFlat className={className}>{children}</CardMobileFlat>
  ),
)`
  transition: ${({ theme }) =>
    theme.transitions.create("box-shadow", {
      duration: theme.transitions.duration.short,
    })};

  ${({ hoverable, theme }) =>
    hoverable &&
    `
      &:hover {
        box-shadow: ${theme.shadows[2]};
      }

      ${theme.breakpoints.up("md")} {
        &:hover {
          box-shadow: ${theme.shadows[4]};
        }
      }
    `};
`;

const ActionArea = styled.div`
  ${({ onClick }) => onClick && "cursor: pointer"};
`;
