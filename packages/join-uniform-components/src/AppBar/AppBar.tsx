import { MenuIcon, PowerSettingsNewIcon } from "@join-uniform/icons";
import { css, styled } from "@join-uniform/theme";
import MuiAppBar from "@material-ui/core/AppBar";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactNode } from "react";
import { Grid } from "../Grid";
import { Typography } from "../Typography";

export type AppBarProps = {
  /** Title text. */
  title: string;

  /** Called on hamburger button click. */
  onDrawerToggleButtonClick: () => void;

  /** Called on logout button click. */
  onLogoutButtonClick: () => void;
};

/**
 * Application app bar. Displays hamburger button on mobile.
 */
export function AppBar(props: AppBarProps) {
  const { title, onDrawerToggleButtonClick, onLogoutButtonClick } = props;

  return (
    <Wrapper>
      <DrawerToggleButton onClick={onDrawerToggleButtonClick} />
      <Title title={title} />
      <LogoutButton onClick={onLogoutButtonClick} />
    </Wrapper>
  );
}

function Wrapper(props: { children?: ReactNode }) {
  const { children } = props;

  return (
    <MuiAppBar position="static" color="inherit">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          {children}
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
}

function DrawerToggleButton(props: { onClick: () => void }) {
  const { onClick } = props;

  return (
    <Grid item>
      <AppBarIconButton
        color="inherit"
        aria-label="Menu"
        onClick={onClick}
        reducedLeftMargin
        mobileOnly
      >
        <MenuIcon />
      </AppBarIconButton>
    </Grid>
  );
}

function Title(props: { title: string }) {
  const { title } = props;

  return (
    <Grid item xs>
      <Typography
        variant="h6"
        color="inherit"
        css={css`
          font-weight: 400;
        `}
      >
        {title}
      </Typography>
    </Grid>
  );
}

function LogoutButton(props: { onClick: () => void }) {
  const { onClick } = props;

  return (
    <Grid item>
      <AppBarIconButton reducedRightMargin red onClick={onClick}>
        <PowerSettingsNewIcon />
      </AppBarIconButton>
    </Grid>
  );
}

const AppBarIconButton = styled(IconButton as FC<IconButtonProps>)<{
  reducedLeftMargin?: boolean;
  reducedRightMargin?: boolean;
  mobileOnly?: boolean;
  red?: boolean;
}>`
  ${props =>
    props.reducedLeftMargin &&
    css`
      margin-left: -12px;
    `};
  ${props =>
    props.mobileOnly &&
    css`
      ${({ theme }) => theme.breakpoints.up("md")} {
        display: none;
      }
    `};

  ${props =>
    props.reducedRightMargin &&
    css`
      margin-right: -12px;
    `};
  ${props =>
    props.red &&
    css`
      color: ${({ theme }) => theme.palette.error.dark};
    `};
`;
