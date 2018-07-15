import React, { Component } from "react";
import styled from "styled";

import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogContentTitle from "@material-ui/core/DialogContentTitle";

import withMobileDialog, {
  InjectedProps as WithMobileDialogProps,
} from "@material-ui/core/withMobileDialog";
import { LogoImage } from "components/LogoImage";
import { Typography } from "components/Typography";
import { TypographyButton } from "components/TypographyButton";

type OwnProps = {};
export { OwnProps as PostSignupDialogsProps };

type PostSignupDialogsState = {
  dialogGetAlertsShown: false;
  dialogAddToHomeScreenShown: false;
};

type Props = OwnProps & WithMobileDialogProps;

class PostSignupDialogs extends Component<Props, PostSignupDialogsState> {
  state: PostSignupDialogsState = {
    dialogGetAlertsShown: false,
    dialogAddToHomeScreenShown: false,
  };

  render() {
    const { fullScreen } = this.props;
    const { dialogGetAlertsShown, dialogAddToHomeScreenShown } = this.state;

    const showDialogGetAlerts =
      !dialogGetAlertsShown && !dialogAddToHomeScreenShown;

    return (
      <>
        <Dialog
          open={showDialogGetAlerts}
          onClose={this.handleGetAlertsDialogClose}
          maxWidth="md"
          fullScreen={fullScreen}
        >
          <DialogContent>
            <Wrapper>
              <Logo />
              <TextContentWrapper>
                <DialogTitleText>Get Alerts</DialogTitleText>

                <DialogTextContent>
                  Get latest updates on free mock tests. You can manage alerts
                  from your browser settings if do not want subsequently.
                </DialogTextContent>

                <DialogButtonsWrapper>
                  <TypographyButton variant="outlined">
                    No Thanks
                  </TypographyButton>
                  <TypographyButton variant="outlined">Allow</TypographyButton>
                </DialogButtonsWrapper>
              </TextContentWrapper>
            </Wrapper>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  private handleGetAlertsDialogClose = () => {
    //
  };
}

const PostSignupDialogsWithMobileDialog = withMobileDialog()(PostSignupDialogs);
export { PostSignupDialogsWithMobileDialog as PostSignupDialogs };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row;
  }
`;

const Logo = styled<{ className?: string }>(({ className }) => (
  <div className={className}>
    <LogoImage />
  </div>
))`
  margin-bottom: 8px;
  text-align: center;

  ${LogoImage} {
    width: 150px;
    height: 150px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    ${LogoImage} {
      display: none;
    }
  }
`;

const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px;
`;

const DialogTitleText = styled<{ children: string; className?: string }>(
  ({ children, className }) => (
    <Typography
      className={className}
      muiTypographyProps={{ variant: "display2" }}
    >
      {children}
    </Typography>
  ),
)`
  margin-bottom: 16px;
  text-align: center;
  color: #000;
`;

const DialogTextContent = styled<{ children: string; className?: string }>(
  ({ children, className }) => (
    <Typography className={className}>{children}</Typography>
  ),
)`
  text-align: center;
  font-size: 22px;
  color: #000;
`;

const DialogButtonsWrapper = styled.div`
  margin-top: 16px;
  text-align: center;

  & > *:first-child {
    margin-right: 8px;
  }
`;
