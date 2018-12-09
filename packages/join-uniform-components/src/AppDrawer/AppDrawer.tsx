import {
  AdminAppDrawerTheme,
  styled,
  UserAppDrawerTheme,
} from "@join-uniform/theme";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import List, { ListProps } from "@material-ui/core/List";
import React, { FC } from "react";
import { LogoListItem } from "./LogoListItem";
import { ResponsiveDrawer } from "./ResponsiveDrawer";

export const drawerWidth = 240;

export type AppDrawerProps = {
  theme: "admin" | "user";
  logoSrc: string;
};

export function AppDrawer(props: AppDrawerProps) {
  const { theme, logoSrc } = props;
  const ThemeProvider =
    theme === "admin" ? AdminAppDrawerTheme : UserAppDrawerTheme;

  return (
    <ThemeProvider>
      <ResponsiveDrawer Drawer={StyledDrawer}>
        <LinksList>
          <LogoListItem src={logoSrc} />
        </LinksList>
      </ResponsiveDrawer>
    </ThemeProvider>
  );
}

const StyledDrawer = styled(Drawer as FC<DrawerProps>).attrs({
  classes: { paper: "drawer-paper" },
})`
  .drawer-paper {
    width: ${drawerWidth}px;
    background-color: ${({ theme }) => theme.palette.background.default};
  }
`;

const LinksList = styled(List as FC<ListProps>)`
  padding-top: 0px;
`;
