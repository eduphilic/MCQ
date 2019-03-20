import { createMuiTheme, Theme, Typography } from "@material-ui/core";
import { styled, ThemeProvider } from "@material-ui/styles";
import React, { ReactNode } from "react";
import { LocalizedStringModel } from "../../../common";
import { themeOptions } from "../../display";

type Props = {
  children?: ReactNode;
  stickyFooterText: LocalizedStringModel;
};

export function LayoutLandingStickyFooter({
  children,
  stickyFooterText,
}: Props) {
  return (
    <Wrapper>
      <main>{children}</main>

      <ThemeProvider theme={footerWrapperTheme}>
        <FooterWrapper>
          <Typography variant="caption">{stickyFooterText.en}</Typography>
        </FooterWrapper>
      </ThemeProvider>
    </Wrapper>
  );
}

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const footerWrapperTheme = createMuiTheme({
  ...themeOptions,
  palette: { type: "dark" },
});

const FooterWrapper = styled("footer")<{ theme: Theme }>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: theme.spacing(5),
  marginTop: "auto",
  backgroundColor: theme.palette.background.default,
}));
