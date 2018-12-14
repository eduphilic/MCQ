import {
  CheckboxMarkedCircleOutlineIcon,
  CloseCircleOutlineIcon,
} from "@join-uniform/icons";
import { css } from "@join-uniform/theme";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { Button } from "../Button";
import { Grid } from "../Grid";
import { Hidden, Typography } from "../muiComponents";

export type PendingChangesButtonProps = {
  /**
   * When the current changes can be published (changes present and pass
   * validation).
   */
  hasPublishableChanges: boolean;

  /**
   * When changes are present. If this is false, the component is hidden.
   */
  hasDiscardableChanges: boolean;

  /** Called when the publish button is clicked. */
  onPublishButtonClick: () => void;

  /** Called when the discard button is clicked. */
  onDiscardButtonClick: () => void;
};

/**
 * A pending changes button with discard and publish buttons for use in the
 * admin dashboard app bar.
 */
export function PendingChangesButton(props: PendingChangesButtonProps) {
  const {
    hasPublishableChanges,
    hasDiscardableChanges,
    onPublishButtonClick,
    onDiscardButtonClick,
  } = props;
  if (!hasDiscardableChanges) return null;

  return (
    <Grid container spacing={8} alignItems="center">
      <Hidden mdUp implementation="css">
        <Grid item>
          <Typography variant="caption">Pending changes</Typography>
        </Grid>
      </Hidden>

      <Grid item>
        <Hidden smDown implementation="css">
          <Button
            variant="contained"
            color="primary"
            disabled={!hasPublishableChanges}
            onClick={onPublishButtonClick}
          >
            Publish changes
          </Button>
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="primary"
            disabled={!hasPublishableChanges}
            onClick={onPublishButtonClick}
            css={css`
              margin-right: -8px;
            `}
          >
            <CheckboxMarkedCircleOutlineIcon />
          </IconButton>
        </Hidden>
      </Grid>

      <Grid item>
        <Hidden smDown implementation="css">
          <Button
            variant="outlined"
            color="primary"
            onClick={onDiscardButtonClick}
          >
            Discard all
          </Button>
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton color="primary" onClick={onDiscardButtonClick}>
            <CloseCircleOutlineIcon />
          </IconButton>
        </Hidden>
      </Grid>
    </Grid>
  );
}
