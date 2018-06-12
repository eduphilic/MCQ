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
   * Review button text. If no text is provided, the button is not displayed.
   */
  reviewButtonLabel?: string;

  /**
   * Disabled review button.
   */
  reviewButtonDisabled?: boolean;

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
    reviewButtonLabel,
    reviewButtonDisabled,
    attemptButtonLabel,
    stats,
  } = props;

  const buttonsNode = (
    <CardContent>
      <ButtonsWrapper>
        {reviewButtonLabel && (
          <Button
            color="primary"
            variant="raised"
            disabled={reviewButtonDisabled}
          >
            {reviewButtonLabel}
          </Button>
        )}
        {attemptButtonLabel && (
          <Button color="primary" variant="raised">
            {attemptButtonLabel}
          </Button>
        )}
      </ButtonsWrapper>
    </CardContent>
  );

  return (
    <CardWithBackgroundColor color={color}>
      <VerticalFlexRowsContainer>
        <FlexRow>
          <CardMediaSquareWithMargin image={imageLogoUrl} />

          <TypographyVerticalFlexContainer>
            <Typography variant="buttonBold">{title}</Typography>
            <Typography variant="cardStatCaption">{subtitle}</Typography>
          </TypographyVerticalFlexContainer>

          {!stats && buttonsNode}
        </FlexRow>

        {stats && (
          <FlexRow>
            <ImageWidthSpacing />

            <TypographyVerticalFlexContainer style={{ marginTop: 0 }}>
              {Object.entries(stats).map(([key, value]) => (
                <StatWrapper key={key}>
                  <Typography>{key}</Typography>
                  <Typography>{value}</Typography>
                </StatWrapper>
              ))}
            </TypographyVerticalFlexContainer>

            {buttonsNode}
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
  margin-bottom: 0px;
`;

const TypographyVerticalFlexContainer = styled.div`
  flex: 1;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 64px;
  margin: ${({ theme }) => theme.spacing.unit * 2}px 0;
`;

const StatWrapper = styled.div`
  display: flex;
  width: 100%;

  & > *:first-child {
    width: 100px;
  }

  & > *:last-child {
    flex: 1;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;

  & > *:not(last-child) {
    margin-right: ${({ theme }) => theme.spacing.unit}px;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    flex-direction: column;

    & > *:not(last-child) {
      margin-right: 0;
      margin-bottom: ${({ theme }) => theme.spacing.unit}px;
    }
  }
`;
