import React, { SFC } from "react";
import styled, { css } from "styled";

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

  /**
   * Rows of key value pairs of status to display under title and subtitle.
   */
  stats?: Record<string, string>;
}

export const DashboardTestCard: SFC<DashboardTestCardProps> = props => {
  const {
    imageLogoUrl,
    title,
    subtitle,
    color,
    attemptButtonLabel,
    stats,
  } = props;

  return (
    <CardWithBackgroundColor color={color}>
      <VerticalFlexRowsContainer>
        <FlexRow>
          <CardMediaSquareWithMargin image={imageLogoUrl} />

          <TypographyVerticalFlexContainer>
            <Typography variant="buttonBold">{title}</Typography>
            <Typography>{subtitle}</Typography>
          </TypographyVerticalFlexContainer>

          {!stats && (
            <CardContent>
              {attemptButtonLabel && (
                <Button color="primary" variant="raised">
                  {attemptButtonLabel}
                </Button>
              )}
            </CardContent>
          )}
        </FlexRow>

        {stats && (
          <FlexRow>
            <ImageWidthSpacing />

            <TypographyVerticalFlexContainer style={{ marginTop: 0 }}>
              <div>Placeholder</div>
            </TypographyVerticalFlexContainer>
          </FlexRow>
        )}
      </VerticalFlexRowsContainer>
    </CardWithBackgroundColor>
  );
};

const CardWithBackgroundColor = styled<
  CardProps & Pick<DashboardTestCardProps, "color">
>(Card as any)`
  background-color: ${({ color }) => (color === "yellow" ? "#ffcb25" : "#fff")};
`;

const VerticalFlexRowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const logoDimensions = css`
  width: 64px;
  height: 64px;
  margin: ${({ theme }) => theme.spacing.unit * 2}px;
`;

const CardMediaSquareWithMargin = styled(CardMedia)`
  ${logoDimensions};
`;

const ImageWidthSpacing = styled.div`
  ${logoDimensions};
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
