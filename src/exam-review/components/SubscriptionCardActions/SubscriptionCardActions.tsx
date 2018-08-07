import { strings } from "localization";
import React, { SFC } from "react";
import styled from "styled";

import CardActions from "@material-ui/core/CardActions";
import {
  TypographyButton,
  TypographyButtonProps,
} from "components/TypographyButton";

export type SubscriptionCardActionsProps = {
  showDisabledExpiredButton?: boolean;
  onReviseButtonClick?: () => void;
  onAttemptButtonClick?: () => void;
};

export const SubscriptionCardActions: SFC<
  SubscriptionCardActionsProps
> = props => {
  const {
    showDisabledExpiredButton,
    onReviseButtonClick,
    onAttemptButtonClick,
  } = props;

  const buttons: (TypographyButtonProps | null)[] = [
    onReviseButtonClick
      ? {
          color: "primary",
          children:
            strings.examReview_SubscriptionCardActions_ReviseButtonTitle,
        }
      : null,
    onAttemptButtonClick
      ? {
          children:
            strings.examReview_SubscriptionCardActions_AttemptButtonTitle,
        }
      : null,
    showDisabledExpiredButton
      ? {
          children:
            strings.examReview_SubscriptionCardActions_ExpiredButtonTitle,
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
    <CardActions>{buttonElements}</CardActions>
  );
};

const SmallTypographyButton = styled<TypographyButtonProps>(TypographyButton)`
  padding: 4px 24px;
`;
