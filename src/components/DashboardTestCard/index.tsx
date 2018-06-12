import React, { SFC } from "react";
import styled from "styled";

import Card, { CardProps } from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { Button } from "components/Button";
import { Typography } from "components/Typography";

export interface DashboardTestCardProps {
  /**
   * Url of image to display on the left side of the card.
   */
  imageLogoUrl: string;

  /**
   * Title text. Grouped with subtitle.
   */
  title: string;

  /**
   * Subtitle text. Grouped with title.
   */
  subtitle: string;

  /**
   * Background color of the card.
   *
   * @default default
   */
  color?: "default" | "yellow";

  /**
   * Attempt button text. If no text is provided it is not displayed.
   */
  attemptButtonLabel?: string;
}

export const DashboardTestCard: SFC<DashboardTestCardProps> = props => {
  const { imageLogoUrl, title, subtitle, color, attemptButtonLabel } = props;

  return (
    <CardWithFlexWrap color={color}>
      <CardMediaSquareWithMargin image={imageLogoUrl} />

      <TypographyVerticalFlexContainer>
        <Typography variant="buttonBold">{title}</Typography>
        <Typography>{subtitle}</Typography>
      </TypographyVerticalFlexContainer>

      <CardContent>
        {attemptButtonLabel && (
          <Button color="primary" variant="raised">
            {attemptButtonLabel}
          </Button>
        )}
      </CardContent>
    </CardWithFlexWrap>
  );
};

const CardWithFlexWrap = styled<
  CardProps & Pick<DashboardTestCardProps, "color">
>(Card as any)`
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ color }) => (color === "yellow" ? "#ffcb25" : "#fff")};
`;

const CardMediaSquareWithMargin = styled(CardMedia)`
  width: 64px;
  height: 64px;
  margin: ${({ theme }) => theme.spacing.unit * 2}px;
`;

const TypographyVerticalFlexContainer = styled.div`
  flex: 1;
  flex-basis: 51%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 64px;
  margin: ${({ theme }) => theme.spacing.unit * 2}px 0;
`;
