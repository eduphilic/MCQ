import Typography, { TypographyProps } from "@material-ui/core/Typography";
import React, { CSSProperties, ReactNode, SFC } from "react";
import { styled } from "../styled";
import { BlockImage } from "./BlockImage";

export type CardHeaderProps = {
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
};

export const CardHeader: SFC<CardHeaderProps> = props => {
  const {
    title,
    titleStyle,
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
  <Typography className={className} variant="overline" gutterBottom>
    {children}
  </Typography>
))`
  font-weight: 500;
`;

const Title = styled<{ className?: string; style?: CSSProperties }>(
  ({ children, className, style }) => (
    <Typography className={className} variant="h5" paragraph style={style}>
      {children}
    </Typography>
  ),
)`
  margin-bottom: 8px;
`;

const Subheader = styled<{
  className?: string;
  color: NonNullable<CardHeaderProps["subheaderColor"]>;
}>(({ children, className, color }) => (
  <Typography
    className={className}
    variant="subtitle2"
    gutterBottom
    color={color}
  >
    {children}
  </Typography>
))``;
