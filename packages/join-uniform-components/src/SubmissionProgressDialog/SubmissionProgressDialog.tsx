import { css } from "@join-uniform/theme";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import React from "react";
import { LoadingSpinner } from "../LoadingSpinner";

type SubmissionProgressDialogProps = {
  open: boolean;
};

export function SubmissionProgressDialog(props: SubmissionProgressDialogProps) {
  const { open } = props;

  return (
    <Dialog
      open={open}
      classes={{ paper: "paper" }}
      css={css`
        .paper {
          width: 200px;
          height: 200px;
        }
      `}
    >
      <DialogContent
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <LoadingSpinner />
      </DialogContent>
    </Dialog>
  );
}
