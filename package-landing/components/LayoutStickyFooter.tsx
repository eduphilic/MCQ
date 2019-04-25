import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { ReactNode } from "react";
import { Theme, ThemeProvider } from "../lib";

export type LayoutStickyFooterProps = {
  children?: ReactNode;
  title: string;
};

export function LayoutStickyFooter(props: LayoutStickyFooterProps) {
  return (
    <Wrapper>
      {props.children}

      <ThemeProvider theme={"dark"}>
        <FooterWrapper>
          <Typography variant="caption" color="textPrimary">
            {props.title}
          </Typography>
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

const FooterWrapper = styled("footer")<Theme, {}>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: theme.spacing(5),
  marginTop: "auto",
  backgroundColor: theme.palette.background.default,
}));
