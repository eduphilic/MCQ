import { drawerWidth } from "css";
import React, { ComponentType, SFC } from "react";
import styled from "styled";
import * as themeComponents from "theme";

import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

type ThemeComponentName = keyof Pick<
  typeof themeComponents,
  "LightTheme" | "DarkTheme" | "AdminAppDrawerTheme" | "UserAppDrawerTheme"
>;

const themes: Record<ThemeComponentName, ComponentType<{}>> = {
  LightTheme: themeComponents.LightTheme,
  DarkTheme: themeComponents.DarkTheme,
  AdminAppDrawerTheme: themeComponents.AdminAppDrawerTheme,
  UserAppDrawerTheme: themeComponents.UserAppDrawerTheme,
};

export type Props = {
  navDrawerTheme: ThemeComponentName;
};

export const AppLayout: SFC<Props> = props => {
  const { navDrawerTheme } = props;
  const NavDrawerTheme = themes[navDrawerTheme];

  return (
    <Wrapper>
      <Hidden smDown>
        <TabletDrawer themeComponent={NavDrawerTheme}>
          <div>placeholder</div>
        </TabletDrawer>
      </Hidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const TabletDrawer = styled<
  DrawerProps & { themeComponent: ComponentType<{}> }
>(({ themeComponent: Theme, ...rest }) => (
  <Theme>
    <Drawer
      {...rest}
      variant="permanent"
      open
      classes={{
        paper: "drawer-paper",
      }}
    />
  </Theme>
))`
  .drawer-paper {
    width: ${drawerWidth}px;
  }
`;
