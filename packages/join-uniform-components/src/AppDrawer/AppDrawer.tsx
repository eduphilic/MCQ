import {
  AdminAppDrawerTheme,
  styled,
  UserAppDrawerTheme,
} from "@join-uniform/theme";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import List, { ListProps } from "@material-ui/core/List";
import React, { FC } from "react";
import { AppDrawerLinkProps } from "./AppDrawerLinkProps";
import { LinkListItem } from "./LinkListItem";
import { LogoListItem } from "./LogoListItem";
import { ResponsiveDrawer } from "./ResponsiveDrawer";

export const drawerWidth = 240;

type Links = Omit<AppDrawerLinkProps, "LinkComponent">[];

export type AppDrawerProps = {
  /** Drawer theme. Either admin dashboard theme or user dashboard theme. */
  theme: "admin" | "user";

  /** Logo image url. Image should be 48px by 48px. */
  logoSrc: string;

  /**
   * Drawer links. The first also used as the home link for the logo image
   * button.
   */
  links: Links;

  /**
   * Link component to wrap drawer links in for navigation/routing purposes. The
   * component should set the class "active" on the parent child.
   */
  LinkComponent: AppDrawerLinkProps["LinkComponent"];
};

export function AppDrawer(props: AppDrawerProps) {
  const { theme, logoSrc, links, LinkComponent } = props;
  const ThemeProvider =
    theme === "admin" ? AdminAppDrawerTheme : UserAppDrawerTheme;

  return (
    <ThemeProvider>
      <ResponsiveDrawer Drawer={StyledDrawer}>
        <LinksList>
          <LogoListItem
            src={logoSrc}
            href={links[0].href}
            LinkComponent={LinkComponent}
          />

          {links.map(link => (
            <LinkListItem
              key={link.href}
              href={link.href}
              title={link.title}
              LinkComponent={LinkComponent}
            />
          ))}
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
