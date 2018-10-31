import {
  AppBar as MuiAppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { PowerSettingsNew } from "@material-ui/icons";
import React, { ReactNode, useEffect, useState } from "react";
import { styled } from "../styled";

export function DashboardLayout(props: { children?: ReactNode }) {
  if (typeof document !== "undefined") document.title = "Dashboard";

  return (
    <>
      <StyledAppBar />

      {props.children}
    </>
  );
}

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
