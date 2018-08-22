// tslint:disable-next-line:import-name
import MuiDialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import withWidth, {
  isWidthDown,
  WithWidthProps,
} from "@material-ui/core/withWidth";
import React, { SFC } from "react";

export enum DialogVariant {
  fullScreen = "fullScreen",
  fullScreenMobileHidden = "fullScreenMobileHidden",
}

type OwnProps = {
  /**
   * Whether the dialog is open or not.
   */
  open: boolean;

  /**
   * Modal variant.
   */
  variant: keyof typeof DialogVariant;
};
export { OwnProps as DialogProps };

type Props = WithWidthProps & OwnProps;

const Dialog: SFC<Props> = props => {
  const { children, open, variant, width } = props;
  const isMobile = isWidthDown("sm", width);

  if (variant === DialogVariant.fullScreenMobileHidden && !isMobile) {
    return null;
  }

  return (
    <MuiDialog
      open={open}
      fullScreen
      scroll="paper"
      TransitionComponent={SlideUpTransition}
    >
      {children}
    </MuiDialog>
  );
};

const DialogWithWidth = withWidth()(Dialog);
export { DialogWithWidth as Dialog };

const SlideUpTransition: SFC<{}> = props => <Slide direction="up" {...props} />;