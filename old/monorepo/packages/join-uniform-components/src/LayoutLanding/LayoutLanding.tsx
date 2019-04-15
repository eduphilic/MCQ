import { strings } from "@join-uniform/localization";
import { DarkTheme, styled } from "@join-uniform/theme";
import React, { FC, ReactNode } from "react";
import { Grid, GridProps } from "../Grid";
import { Typography } from "../muiComponents";

type LayoutLandingProps = { children?: ReactNode };

export function LayoutLanding(props: LayoutLandingProps) {
  const { children } = props;

  return (
    <Wrapper>
      <PageContentsWrapper>{children}</PageContentsWrapper>

      <FooterWrapper>
        <DarkTheme>
          <Typography variant="caption">{strings.landingFooter}</Typography>
        </DarkTheme>
      </FooterWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(Grid as FC<GridProps>).attrs(
  (): Partial<GridProps> => ({
    container: true,
    direction: "column",
    wrap: "nowrap",
  }),
)`
  height: 100%;
`;

const PageContentsWrapper = styled(Grid as FC<GridProps>).attrs(
  (): Partial<GridProps> => ({
    item: true,
    xs: true,
  }),
)``;

const FooterWrapper = styled(Grid as FC<GridProps>).attrs(
  (): Partial<GridProps> => ({
    component: "footer",
    item: true,
    container: true,
    justify: "center",
    alignItems: "center",
  }),
)`
  flex-shrink: 0;
  height: 40px;
  background-color: #333333;
`;
