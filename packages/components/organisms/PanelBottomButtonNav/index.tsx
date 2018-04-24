import Button from "material-ui/Button";
import Divider from "material-ui/Divider";
import Hidden from "material-ui/Hidden";
import Typography from "material-ui/Typography";
import React, { SFC } from "react";
import styled from "styled";

export interface PanelBottomButtonNavProps {
  /**
   * Optional text label to display to the left of the navigation buttons.
   */
  label?: string;

  /**
   * Whether to display the back button.
   */
  showBackButton: boolean;

  /**
   * Whether to display the next button.
   */
  showNextButton: boolean;

  /**
   * Back button label.
   */
  backButtonLabel: string;

  /**
   * Next button label.
   */
  nextButtonLabel: string;

  onBackButtonClick: () => void;
  onNextButtonClick: () => void;

  className?: string;
}

/**
 * A button navigation panel for docking to the bottom of a page.
 * Contains back and next buttons with optional label text.
 */
export const PanelBottomButtonNav: SFC<PanelBottomButtonNavProps> = props => {
  const {
    label,
    showBackButton,
    showNextButton,
    backButtonLabel,
    nextButtonLabel,
    onBackButtonClick,
    onNextButtonClick,
    className,
  } = props;

  return (
    <Wrapper className={className}>
      <Divider />

      <ButtonsWrapper>
        <LabelWrapper>
          <Hidden xsDown implementation="css">
            {label && <Typography variant="body2">{label}</Typography>}
          </Hidden>
        </LabelWrapper>

        {showBackButton && (
          <Button variant="raised" onClick={onBackButtonClick}>
            {backButtonLabel}
          </Button>
        )}

        {showNextButton && (
          <Button className="next" variant="raised" onClick={onNextButtonClick}>
            {nextButtonLabel}
          </Button>
        )}
      </ButtonsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.spacing.unit * 4}px;
`;

const LabelWrapper = styled.div`
  flex: 1;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${props => props.theme.spacing.unit * 2}px 0;

  .next {
    color: ${props => props.theme.palette.primary.main};
  }

  > button {
    background-color: #fff;
    text-transform: none;
  }

  > button:last-child {
    margin-left: ${props => props.theme.spacing.unit * 2}px;
  }
`;
