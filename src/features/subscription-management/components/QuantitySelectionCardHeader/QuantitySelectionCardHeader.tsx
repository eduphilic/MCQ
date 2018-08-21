import { strings } from "features/localization";
import React, { SFC } from "react";
import styled from "styled";

import { BlockImage } from "componentsV0/BlockImage";
import { RupeeFontSpan } from "componentsV0/RupeeFontSpan";
import { Typography2 } from "componentsV0/Typography2";

export type QuantitySelectionCardHeaderProps = {
  /** Card title. */
  title: string;

  /** Price per exam. */
  pricePerExamRs: number;

  /** Image url. */
  imageUrl: string;
};

export const QuantitySelectionCardHeader: SFC<
  QuantitySelectionCardHeaderProps
> = props => {
  const { title, pricePerExamRs, imageUrl } = props;

  return (
    <Wrapper>
      <Image src={imageUrl} />

      <div>
        <Title>{title}</Title>

        <Subheader>
          <RupeeFontSpan>B</RupeeFontSpan>
          &nbsp;
          {pricePerExamRs}
          &nbsp;
          {strings.subscription_management_QuantitySelectionCardHeader_PricingText.replace(
            "{}",
            "3", // Number of months subscription is valid,
          )}
        </Subheader>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.unit * 2}px;
`;

const Image = styled(BlockImage)`
  width: 48px;
  height: 48px;
  margin-right: ${({ theme }) => theme.spacing.unit * 2}px;
`;

const Title = styled<{ className?: string }>(({ children, className }) => (
  <Typography2 className={className} variant="H6" paragraph>
    {children}
  </Typography2>
))`
  margin-bottom: 8px;
  font-weight: 500;
`;

const Subheader = styled<{ className?: string }>(({ children, className }) => (
  <Typography2
    className={className}
    variant="Subtitle2"
    gutterBottom
    color="textSecondary"
  >
    {children}
  </Typography2>
))``;
