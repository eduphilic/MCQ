import React, { Component } from "react";
import styled from "styled";

import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogContentTitle from "@material-ui/core/DialogContentTitle";

import { LogoImage } from "components/LogoImage";
import { Typography } from "components/Typography";

// tslint:disable-next-line:no-empty-interface
type PostSignupDialogsProps = {};

type PostSignupDialogsState = {
  dialogGetAlertsShown: false;
  dialogAddToHomeScreenShown: false;
};

export class PostSignupDialogs extends Component<
  PostSignupDialogsProps,
  PostSignupDialogsState
> {
  state: PostSignupDialogsState = {
    dialogGetAlertsShown: false,
    dialogAddToHomeScreenShown: false,
  };

  render() {
    const { dialogGetAlertsShown, dialogAddToHomeScreenShown } = this.state;

    const showDialogGetAlerts =
      !dialogGetAlertsShown && !dialogAddToHomeScreenShown;

    return (
      <>
        <Dialog
          open={showDialogGetAlerts}
          onClose={this.handleGetAlertsDialogClose}
          maxWidth="md"
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

  ${({ theme }) => theme.breakpoints.down("xs")} {
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
