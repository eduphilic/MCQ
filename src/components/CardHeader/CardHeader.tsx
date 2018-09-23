import React, { ReactNode, SFC } from "react";
import styled from "styled";

import { Typography, TypographyProps } from "components/Typography";
import { BlockImage } from "componentsV0/BlockImage";

export type CardHeaderProps = {
  /** Card title. */
  title: ReactNode;

  /** Subheader contents. */
  subheader?: ReactNode;

  /**
   * Subheader color.
   *
   * @default textSecondary
   */
  subheaderColor?: NonNullable<TypographyProps["color"]>;

  /** Image url. */
  imageUrl?: string;

  /**
   * Image size.
   *
   * @default 80
   */
  imageSize?: 48 | 80;

  /** Overline contents. */
  overline?: string;
};

export const CardHeader: SFC<CardHeaderProps> = props => {
  const {
    title,
    subheader,
    imageUrl,
    imageSize = 80,
    overline,
    subheaderColor = "textSecondary",
  } = props;

  return (
    <Wrapper>
      {imageUrl && <Image src={imageUrl} size={imageSize} />}

      <div>
        {overline && <Overline>{overline}</Overline>}

        <Title>{title}</Title>

        <Subheader color={subheaderColor}>{subheader}</Subheader>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.unit * 2}px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding: ${({ theme }) => theme.spacing.unit * 2}px
      ${({ theme }) => theme.spacing.unit * 3}px;
  }
`;

const Image = styled<{ className?: string; src: string; size: number }>(
  props => <BlockImage className={props.className} src={props.src} />,
)`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin-right: ${({ theme }) => theme.spacing.unit * 2}px;
`;

const Overline = styled<{
  className?: string;
}>(({ className, children }) => (
  <Typography className={className} variant="Overline" gutterBottom>
    {children}
  </Typography>
))`
  font-weight: 500;
`;

const Title = styled<{ className?: string }>(({ children, className }) => (
  <Typography className={className} variant="H5" paragraph>
    {children}
  </Typography>
))`
  margin-bottom: 8px;
`;

const Subheader = styled<{
  className?: string;
  color: NonNullable<CardHeaderProps["subheaderColor"]>;
}>(({ children, className, color }) => (
  <Typography
    className={className}
    variant="Subtitle2"
    gutterBottom
    color={color}
  >
    {children}
  </Typography>
))``;
