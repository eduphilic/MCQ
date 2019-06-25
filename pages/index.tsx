import { Dialog, IconButton, Toolbar } from "@material-ui/core";
import { ToolbarProps } from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import styled from "styled-components";
import { Logo } from "../src/components";
import { LandingPageLayout } from "../src/components/LandingPageLayout";
import { LandingPageSectionAboveTheFold } from "../src/components/LandingPageSectionAboveTheFold";

export default function LandingPage() {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  // const [authDialog, setAuthDialog] = useState<"signin" | "signup">("signin");

  // const handleSignInButtonClick = () => {
  //   setAuthDialogOpen(true);
  // };

  const handleAuthDialogClose = () => {
    setAuthDialogOpen(false);
  };

  return (
    <>
      <LandingPageLayout
        sectionFoldAboveElement={<LandingPageSectionAboveTheFold />}
      />
      <Dialog fullScreen open={authDialogOpen} onClose={handleAuthDialogClose}>
        <LandingPageHeader>
          <Logo size={64} />
          <LandingPageHeaderSpacer />
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Close"
            onClick={handleAuthDialogClose}
          >
            <CloseIcon />
          </IconButton>
        </LandingPageHeader>
      </Dialog>
    </>
  );
}

const LandingPageHeaderSpacer = styled.div`
  flex: 1;
`;

const LandingPageHeader = styled(Toolbar).attrs(
  (): ToolbarProps => ({ component: "header" }),
)`
  width: 100%;
  max-width: ${({ theme }) =>
    theme.breakpoints.values[theme.app.maxContentWidthBreakpoint]}px;
  margin: ${({ theme }) => theme.spacing(3)}px auto 0 auto;
`;
