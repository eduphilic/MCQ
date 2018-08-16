import React, { SFC } from "react";
import styled from "styled";

import { BlockImage } from "components/BlockImage";
import { Typography2 } from "components/Typography2";

export type SubscriptionCardHeaderProps = {
  /** Card title. */
  title: string;

  /** Subheader contents. */
  subheader: string;

  /** Image url. */
  imageUrl: string;

  /** Overline contents. */
  overline?: string;
};

export const SubscriptionCardHeader: SFC<
  SubscriptionCardHeaderProps
> = props => {
  const { title, subheader, imageUrl, overline } = props;

  return (
    <Wrapper>
      <Image src={imageUrl} />

      <div>
        {overline && <Overline>{overline}</Overline>}

        <Title>{title}</Title>

        <Subheader>{subheader}</Subheader>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.unit * 2}px;
`;

const Image = styled(BlockImage)`
  width: 80px;
  height: 80px;
  margin-right: ${({ theme }) => theme.spacing.unit * 2}px;
`;

const Overline = styled<{ className?: string }>(({ children, className }) => (
  <Typography2 className={className} variant="Overline" gutterBottom>
    {children}
  </Typography2>
))`
  font-weight: 500;
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
