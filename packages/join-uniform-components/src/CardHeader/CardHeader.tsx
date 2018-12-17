import { styled } from "@join-uniform/theme";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import React, { CSSProperties, ReactNode, SFC } from "react";

export type CardHeaderProps = {
  className?: string;

  /** Card title. */
  title: ReactNode;

  titleStyle?: CSSProperties;

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

  /**
   * Variant of the font styles.
   *
   * @default "normal"
   */
  variant?: "normal" | "admin";
};

export const CardHeader: SFC<CardHeaderProps> = props => {
  const {
    className,
    title,
    titleStyle: titleStyleProp,
    subheader,
    imageUrl,
    imageSize = 80,
    overline,
    subheaderColor = "textSecondary",
    variant,
  } = props;

  const titleStyle =
    titleStyleProp || variant === "admin"
      ? { fontSize: 18, fontWeight: 500 }
      : undefined;

  return (
    <Wrapper className={className}>
      {imageUrl && <Image src={imageUrl} size={imageSize} />}

      <div>
        {overline && <Overline>{overline}</Overline>}

        <Title style={titleStyle}>{title}</Title>

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

const Image = styled(
  (props: { className?: string; src: string; size: number }) => (
    <img className={props.className} src={props.src} />
  ),
)`
  display: block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin-right: ${({ theme }) => theme.spacing.unit * 2}px;
`;

const Overline = styled(
  ({ className, children }: { children?: ReactNode; className?: string }) => (
    <Typography className={className} variant="overline" gutterBottom>
      {children}
    </Typography>
  ),
)`
  font-weight: 500;
`;

const Title = styled(
  ({
    children,
    className,
    style,
  }: {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
  }) => (
    <Typography className={className} variant="h5" paragraph style={style}>
      {children}
    </Typography>
  ),
)`
  margin-bottom: 8px;
`;

const Subheader = styled(
  ({
    children,
    className,
    color,
  }: TypographyProps & {
    style?: CSSProperties;
  }) => (
    <Typography
      className={className}
      variant="subtitle2"
      gutterBottom
      color={color}
    >
      {children}
    </Typography>
  ),
)``;
