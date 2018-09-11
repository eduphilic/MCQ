import { strings } from "features/localization";
import React, { ComponentType, SFC } from "react";
import styled from "styled";

import CardActions from "@material-ui/core/CardActions";
import {
  TypographyButton,
  TypographyButtonProps,
} from "componentsV0/TypographyButton";

export type SubscriptionCardActionsProps = {
  showDisabledExpiredButton?: boolean;
  reviewButtonLinkComponent?: ComponentType<any>;
  onAttemptButtonClick?: () => void;
};

export const SubscriptionCardActions: SFC<
  SubscriptionCardActionsProps
> = props => {
  const {
    showDisabledExpiredButton,
    reviewButtonLinkComponent,
    onAttemptButtonClick,
  } = props;

  const buttons: (TypographyButtonProps | null)[] = [
    reviewButtonLinkComponent
      ? {
          color: "primary",
          children: strings.examBoard_SubscriptionCardActions_ReviseButtonTitle,
          component: reviewButtonLinkComponent,
        }
      : null,
    onAttemptButtonClick
      ? {
          children:
            strings.examBoard_SubscriptionCardActions_AttemptButtonTitle,
          onClick: onAttemptButtonClick,
        }
      : null,
    showDisabledExpiredButton
      ? {
          children:
            strings.examBoard_SubscriptionCardActions_ExpiredButtonTitle,
          disabled: true,
        }
      : null,
  ];

  const buttonElements = buttons
    .filter((b): b is Omit<TypographyButtonProps, "innerRef"> => b !== null)
    .map(b => (
      <SmallTypographyButton
        key={b.children as string}
        size="small"
        variant="outlined"
        {...b}
      >
        {b.children}
      </SmallTypographyButton>
    ));

  return buttonElements.length === 0 ? null : (
    <StyledCardActions>{buttonElements}</StyledCardActions>
  );
};

const SmallTypographyButton = styled<TypographyButtonProps>(TypographyButton)`
  padding: 4px 24px;
`;

const StyledCardActions = styled(CardActions)`
  justify-content: flex-end;
`;
