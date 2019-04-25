import { Container, Theme, Typography } from "@material-ui/core";
import { ContainerProps } from "@material-ui/core/Container";
import { styled, ThemeProvider } from "@material-ui/styles";
import React, { ReactNode } from "react";
import { themes } from "../lib";

export type LayoutStickyFooterProps = {
  children?: ReactNode;
  title: string;
};

export function LayoutStickyFooter(props: LayoutStickyFooterProps) {
  return (
    <Wrapper>
      {props.children}

      <ThemeProvider theme={themes.dark}>
        <StyledContainer maxWidth={false}>
          <Typography variant="caption" color="textPrimary">
            {props.title}
          </Typography>
        </StyledContainer>
      </ThemeProvider>
    </Wrapper>
  );
}

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const StyledContainer = styled((props: ContainerProps) => (
  <Container {...props} component="footer" />
))<Theme, {}>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: theme.spacing(5),
  marginTop: "auto",
  backgroundColor: theme.palette.background.default,
}));
