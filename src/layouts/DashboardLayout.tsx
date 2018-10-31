import {
  AppBar as MuiAppBar,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
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

  return (
    <MuiAppBar className={props.className} color="inherit">
      <Toolbar>
        <Grid container>
          <Grid item>
            <Typography
              variant="h6"
              color="inherit"
              style={{ fontWeight: 400 }}
              suppressHydrationWarning
            >
              {title}
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
}

const StyledAppBar = styled(AppBar)``;

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
