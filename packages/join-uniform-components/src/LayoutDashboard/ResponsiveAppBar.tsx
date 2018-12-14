import { styled } from "@join-uniform/theme";
import React from "react";
import { AppBar, AppBarProps } from "../AppBar";
import { drawerWidth, useAppDrawerContext } from "../AppDrawer";

export type ResponsiveAppBarProps = Omit<
  AppBarProps,
  "onDrawerToggleButtonClick"
>;

export const ResponsiveAppBar = styled(
  (props: ResponsiveAppBarProps & { className?: string }) => {
    const { toggle } = useAppDrawerContext();
    const { className, ...rest } = props;

    return (
      <div className={className}>
        <AppBar {...rest} onDrawerToggleButtonClick={toggle} />
      </div>
    );
  },
)`
  position: fixed;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.appBar};

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: calc(100% - ${drawerWidth}px);
    margin-left: ${drawerWidth}px;
  }
`;
