import React, { Component } from "react";
import { connect } from "react-redux";
import { State } from "store";
import styled from "styled";
import { actions as dashboardActions } from "../../actions";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import withMobileDialog, {
  InjectedProps as WithMobileDialogProps,
} from "@material-ui/core/withMobileDialog";
import { LogoImage } from "components/LogoImage";
import { Typography } from "components/Typography";
import { TypographyButton } from "components/TypographyButton";

type OwnProps = {};
export { OwnProps as PostSignupDialogsProps };

type DispatchProps = {
  onSubmit: () => any;
};

type PostSignupDialogsState = {
  dialogGetAlertsShown: boolean;
  dialogAddToHomeScreenShown: boolean;
};

type Props = OwnProps & DispatchProps & WithMobileDialogProps;

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
    const showDialogAddToHomeScreen =
      dialogGetAlertsShown && !dialogAddToHomeScreenShown;

    const dialogs = [
      {
        open: showDialogGetAlerts,
        onAccept: () => this.handleGetAlertsDialogClose("accept"),
        onDecline: () => this.handleGetAlertsDialogClose("decline"),
        title: "Get Alerts",
        text:
          "Get latest updates on free mock tests. You can manage alerts from your browser settings if do not want subsequently.",
        buttonDeclineText: "No Thanks",
        buttonAcceptText: "Allow",
      },
      {
        open: showDialogAddToHomeScreen,
        onAccept: () => this.handleAddToHomeScreenClose("accept"),
        onDecline: () => this.handleAddToHomeScreenClose("decline"),
        title: "Add to Home Screen",
        text: "Add shortcut to your home screen for quick access",
        buttonDeclineText: "No Thanks",
        buttonAcceptText: "Add",
      },
    ];

    return dialogs.map(d => (
      <Dialog
        key={d.title}
        open={d.open}
        onClose={d.onDecline}
        maxWidth="md"
        fullScreen={fullScreen}
      >
        <DialogContent>
          <Wrapper>
            <Logo />
            <TextContentWrapper>
              <DialogTitleText>{d.title}</DialogTitleText>

              <DialogTextContent>{d.text}</DialogTextContent>

              <DialogButtonsWrapper>
                <TypographyButton variant="outlined" onClick={d.onDecline}>
                  {d.buttonDeclineText}
                </TypographyButton>
                <TypographyButton variant="outlined" onClick={d.onAccept}>
                  {d.buttonAcceptText}
                </TypographyButton>
              </DialogButtonsWrapper>
            </TextContentWrapper>
          </Wrapper>
        </DialogContent>
      </Dialog>
    ));
  }

  private handleGetAlertsDialogClose = (_response: "accept" | "decline") => {
    this.setState({ dialogGetAlertsShown: true });
  };

  private handleAddToHomeScreenClose = (_response: "accept" | "decline") => {
    this.setState({ dialogAddToHomeScreenShown: true });
    this.props.onSubmit();
  };
}

const PostSignupDialogsWithMobileDialog = withMobileDialog<any>()(
  PostSignupDialogs,
);

const PostSignupDialogsContainer = connect<{}, DispatchProps, OwnProps, State>(
  () => ({}),
  { onSubmit: () => dashboardActions.setPostDialogsShown(true) },
)(PostSignupDialogsWithMobileDialog);

export { PostSignupDialogsContainer as PostSignupDialogs };

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
