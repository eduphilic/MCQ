import MuiAppBar from "@material-ui/core/AppBar";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText, {
  ListItemTextProps,
} from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withWidth, { isWidthDown, WithWidth } from "@material-ui/core/withWidth";
import Menu from "@material-ui/icons/Menu";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import { Location, Match, navigate } from "@reach/router";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Logo } from "../components/Logo";
import { AdminAppDrawerTheme, mixins, styled } from "../styled";

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

              <LinkListItem title="Dashboard" to="/admin/dashboard" />
              <LinkListItem title="Index Manager" to="/admin/index-manager" />
            </StyledList>
          </StyledResponsiveDrawer>
        </AdminAppDrawerTheme>

        <AppBarSpacer />
        <ContentWrapper>{props.children}</ContentWrapper>
      </DrawerToggleContext.Provider>
    </DrawerIsOpenContext.Provider>
  );
}

const drawerWidth = 240;

// DrawerLink.tsx
function LinkListItem(props: { title: string; to: string }) {
  function getProps(match: boolean): ListItemTextProps {
    return {
      children: props.title,
      primaryTypographyProps: match ? undefined : { color: "textSecondary" },
      onClick: () => navigate(props.to),
    };
  }

  return (
    <Match path={props.to}>
      {({ match }) => (
        <ListItem button>
          <ListItemText {...getProps(!!match)} />
        </ListItem>
      )}
    </Match>
  );
}

const ContentWrapper = styled.main`
  padding: 16px 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-left: ${drawerWidth}px;
  }
`;

const AppBarSpacer = styled.div`
  ${mixins.toolbar};
`;

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
