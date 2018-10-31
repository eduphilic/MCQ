import {
  AppBar as MuiAppBar,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  withWidth,
} from "@material-ui/core";
import { DrawerProps } from "@material-ui/core/Drawer";
import { isWidthDown, WithWidth } from "@material-ui/core/withWidth";
import { Menu, PowerSettingsNew } from "@material-ui/icons";
import { Location, navigate } from "@reach/router";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Logo } from "../components/Logo";
import { AdminAppDrawerTheme, styled } from "../styled";

const DrawerIsOpenContext = createContext(false);
const DrawerToggleContext = createContext(() => {});

export function DashboardLayout(props: { children?: ReactNode }) {
  if (typeof document !== "undefined") document.title = "Dashboard";
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = useCallback(() => {
    setDrawerOpen(state => !state);
  }, []);

  return (
    <DrawerIsOpenContext.Provider value={drawerOpen}>
      <DrawerToggleContext.Provider value={toggleDrawer}>
        <StyledAppBar />

        <AdminAppDrawerTheme>
          <StyledResponsiveDrawer>
            <StyledList>
              <StyledLogoLinkListItem />
            </StyledList>
          </StyledResponsiveDrawer>
        </AdminAppDrawerTheme>

        {props.children}
      </DrawerToggleContext.Provider>
    </DrawerIsOpenContext.Provider>
  );
}

function LogoLinkListItem(props: { className?: string }) {
  function handleClick(pathname: string) {
    navigate(/^\/admin/.test(pathname) ? "/admin/dashboard" : "/dashboard");
  }

  return (
    <Location>
      {({ location }) => (
        <ListItem
          className={props.className}
          button
          onClick={() => handleClick(location.pathname)}
        >
          <Logo className="logo-link-list-item-logo" />
        </ListItem>
      )}
    </Location>
  );
}

const StyledLogoLinkListItem = styled(LogoLinkListItem)`
  padding: 8px 4px 8px 16px;

  .logo-link-list-item-logo {
    width: 100%;
  }
`;

const StyledList = styled(List)`
  padding-top: 0;
`;

function AppBar(props: { className?: string }) {
  const title = useAppBarTitle();

  function handleLogoutButtonClick() {
    location.href = "/logout";
  }

  return (
    <MuiAppBar className={props.className} color="inherit">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          {/* Left side of app bar. */}
          <Grid item>
            <StyledDrawerToggleButton />
          </Grid>
          <Grid item xs>
            <Typography
              className="app-bar-title"
              variant="h6"
              color="inherit"
              suppressHydrationWarning
            >
              {title}
            </Typography>
          </Grid>

          {/* Right side of app bar. */}
          <Grid item>
            <Grid container>
              <Grid item>
                <StyledLogoutButton onClick={handleLogoutButtonClick} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
}

const drawerWidth = 240;

const StyledAppBar = styled(AppBar)`
  .app-bar-title {
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: calc(100% - ${drawerWidth}px);
    margin-left: ${drawerWidth}px;
  }
`;

function DrawerToggleButton(props: { className?: string }) {
  const onClick = useContext(DrawerToggleContext);

  return (
    <IconButton
      className={props.className}
      color="inherit"
      aria-label="Menu"
      onClick={onClick}
    >
      <Menu />
    </IconButton>
  );
}

const StyledDrawerToggleButton = styled(DrawerToggleButton)`
  margin-left: -12px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`;

function ResponsiveDrawer({ width, ...rest }: WithWidth & DrawerProps) {
  const open = useContext(DrawerIsOpenContext);
  const onClose = useContext(DrawerToggleContext);
  const isMobile = isWidthDown("sm", width);

  return (
    <Drawer
      {...rest}
      variant={isMobile ? "temporary" : "permanent"}
      anchor={isMobile ? "left" : undefined}
      open={!isMobile || open}
      onClose={onClose}
      ModalProps={isMobile ? { keepMounted: true } : undefined}
    />
  );
}

const StyledResponsiveDrawer = styled(withWidth()(ResponsiveDrawer)).attrs({
  classes: { paper: "drawer-paper" },
})`
  .drawer-paper {
    width: ${drawerWidth}px;
    background-color: ${({ theme }) => theme.palette.background.default};
  }
`;

function LogoutButton(props: { className?: string; onClick: () => any }) {
  return (
    <IconButton className={props.className} onClick={props.onClick}>
      <PowerSettingsNew />
    </IconButton>
  );
}

const StyledLogoutButton = styled(LogoutButton)`
  margin-right: -12px;
  color: ${({ theme }) => theme.palette.error.dark};
`;

/**
 * Returns the app bar title by subscribing to changes in `document.title`. It
 * removes the trailing "- Join Uniform".
 */
function useAppBarTitle() {
  if (typeof document === "undefined") return "";
  const [title, setTitle] = useState(getPageTitle);

  useEffect(() => {
    function handleMutations(mutations: MutationRecord[]) {
      const titleMutation = mutations.find(m => m.target === document.querySelector("title")); // prettier-ignore
      if (titleMutation) setTitle(getPageTitle);
    }

    const observer = new MutationObserver(handleMutations);
    observer.observe(document.querySelector("head")!, {
      subtree: true,
      characterData: true,
      childList: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  function getPageTitle() {
    return document.title.replace(/ - Join ?Uniform/, "");
  }

  return title;
}
