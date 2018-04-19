import strings from "l10n";
// import { Button } from "../../atoms/Button";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import React, { SFC } from "react";
import styled from "styled";
import { TextField } from "../../atoms/TextField";

export interface SelectionSummaryProps {
  /**
   * Text to display to the left of the list and button components.
   */
  label: string;

  /**
   * Selection summary.
   */
  selections: string;

  /**
   * Use small bottom margin. This is used when layering on top of another
   * selection summary component.
   */
  smallBottomMargin?: boolean;

  /**
   * Called when the change button is called.
   */
  onChangeClick: () => void;
}

/**
 * Summary component. Displays a list of current selections with a button to
 * navigate to a previous flow panel.
 */
export const SelectionSummary: SFC<SelectionSummaryProps> = props => {
  const { label, selections, onChangeClick, smallBottomMargin } = props;

  return (
    <Wrapper className={smallBottomMargin ? "small-margin" : ""}>
      <Typography className="label" variant="body2" component="p">
        {label}
      </Typography>

      <TextField className="selections" value={selections} disabled />

      <Button
        className="button"
        onClick={onChangeClick}
        variant="raised"
        color="primary"
      >
        {strings.selectionChangeButtonText}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 800px;
  padding: 16px 32px;
  margin: 0 auto;
  margin-bottom: 48px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  background-color: #fefefe;

  &.small-margin {
    margin-bottom: 16px;
  }

  > .label {
    text-transform: uppercase;
    font-size: 16px;

    @media only screen and (max-width: 700px) {
      font-size: 14px;
    }

    ${props => props.theme.breakpoints.down("xs")} {
      display: none;
    }
  }

  .selections {
    width: 40%;
    margin: 0 !important;
    margin-left: auto !important;

    ${props => props.theme.breakpoints.down("xs")} {
      width: 100%;
    }
  }

  .selections input {
    padding: 12px 12px !important;
    border-radius: 4px;
    color: #000;
  }

  .button {
    margin-left: 16px;
    margin-bottom: 1px;
    line-height: 1rem;
    text-transform: none;
  }
`;
