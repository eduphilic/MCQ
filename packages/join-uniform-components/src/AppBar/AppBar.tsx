import { MenuIcon, PowerSettingsNewIcon } from "@join-uniform/icons";
import { css, styled } from "@join-uniform/theme";
import MuiAppBar from "@material-ui/core/AppBar";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import React, { FC, ReactElement, ReactNode } from "react";
import { Grid } from "../Grid";
import { Hidden } from "../Hidden";
import { Typography, TypographyProps } from "../muiComponents";

export type AppBarProps = {
  /** Title text. */
  title: string;

  /** Buttons to render to the left of the logout button. */
  buttons?: ReactElement<any>[];

  /** Called on hamburger button click. */
  onDrawerToggleButtonClick: () => void;

  /** Called on logout button click. */
  onLogoutButtonClick: () => void;
};

/**
 * Application app bar. Displays hamburger button on mobile.
 */
export function AppBar(props: AppBarProps) {
  const {
    title,
    buttons,
    onDrawerToggleButtonClick,
    onLogoutButtonClick,
  } = props;

  return (
    <Wrapper>
      <DrawerToggleButton onClick={onDrawerToggleButtonClick} />
      <Title title={title} />
      {buttons && <ButtonsContainer buttons={buttons} />}
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
      <Hidden implementation="css" smDown>
        <AppBarTypography variant="h6" color="inherit">
          {title}
        </AppBarTypography>
      </Hidden>
    </Grid>
  );
}

const AppBarTypography = styled(Typography as FC<TypographyProps>)`
  font-weight: 400;
`;

function ButtonsContainer(props: { buttons: ReactElement<any>[] }) {
  const { buttons } = props;

  return (
    <>
      {buttons.map((button, index) => (
        <Grid key={button.key || index} item>
          {button}
        </Grid>
      ))}
    </>
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

const AppBarIconButton = styled(
  (
    props: IconButtonProps & {
      reducedLeftMargin?: boolean;
      reducedRightMargin?: boolean;
      mobileOnly?: boolean;
      red?: boolean;
    },
  ) => {
    const {
      reducedLeftMargin,
      mobileOnly,
      reducedRightMargin,
      red,
      ...rest
    } = props;

    return <IconButton {...rest} />;
  },
)`
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
