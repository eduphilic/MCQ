import React, { Fragment, SFC } from "react";
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
   * Revise button text. If no text is provided, the button is not displayed.
   */
  reviseButtonLabel?: string;

  /**
   * Disable revise button.
   */
  reviseButtonDisabled?: boolean;

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
    reviseButtonLabel,
    reviseButtonDisabled,
    attemptButtonLabel,
    stats,
  } = props;

  const buttonsNode = (
    <CardContent>
      <ButtonsWrapper>
        {reviseButtonLabel && (
          <Button
            color="primary"
            variant="raised"
            disabled={reviseButtonDisabled}
          >
            {reviseButtonLabel}
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
                  <Typography>{returnAnnotatedValue(value)}</Typography>
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

/**
 * Surrounds text in parentheses with an annotation component, which darkens the
 * text.
 *
 * @param value Text value to check for parentheses in.
 */
const returnAnnotatedValue = (value: string) => {
  const startBracketPosition = value.indexOf("(");
  if (startBracketPosition === -1) return value;
  const endBracketPosition = value.indexOf(")");
  if (endBracketPosition < startBracketPosition) return value;

  const beginningText = value.substring(0, startBracketPosition);
  const annotatedText = value.substring(
    startBracketPosition,
    endBracketPosition + 1,
  );
  const endingText = value.substring(endBracketPosition + 1);

  const nodes = [];
  nodes.push(<Fragment key="beginningText">{beginningText}</Fragment>);
  nodes.push(
    <span key="annotation" className="annotation">
      {annotatedText}
    </span>,
  );
  nodes.push(<Fragment key="endingText">{endingText}</Fragment>);

  return <AnnotatedText>{nodes}</AnnotatedText>;
};

const AnnotatedText = styled.span`
  .annotation {
    color: #999696;
  }
`;

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
