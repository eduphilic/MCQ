import AppBar from "@material-ui/core/AppBar";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Close from "@material-ui/icons/Close";
import { Typography } from "components/Typography";
import React, { SFC } from "react";
import styled from "styled";

export type DialogAppBarProps = {
  title: string;

  /**
   * Icon to use for the close button.
   *
   * @default close
   */
  closeIcon?: "back" | "close";
};

export const DialogAppBar: SFC<DialogAppBarProps> = props => {
  const { title, closeIcon = "close", onCloseButtonClick } = props;
  const CloseIconComponent = closeIcon === "close" ? Close : ArrowBack;

  return (
    <StyledDialogTitle>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <IconButton color="inherit">
            <CloseIconComponent />
          </IconButton>

          <Typography variant="Subtitle2">{title}</Typography>
        </Toolbar>
      </AppBar>
    </StyledDialogTitle>
  );
};

const StyledDialogTitle = styled<{ className?: string }>(
  ({ children, className }) => (
    <DialogTitle className={className} disableTypography>
      {children}
    </DialogTitle>
  ),
)`
  padding: 0;
  z-index: ${({ theme }) => theme.zIndex.appBar};
`;
  padding: 0;
  z-index: ${({ theme }) => theme.zIndex.appBar};
`;

const CloseButton = styled<{ className?: string; onClick: () => void }>(
  props => (
    <IconButton
      className={props.className}
      color="inherit"
      onClick={props.onClick}
    >
      {props.children}
    </IconButton>
  ),
)`
  margin-left: -12px;
  margin-right: 20px;
`;
