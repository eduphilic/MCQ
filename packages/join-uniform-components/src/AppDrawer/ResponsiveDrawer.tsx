import { DrawerProps } from "@material-ui/core/Drawer";
import React, { ComponentType, ReactNode } from "react";
import { Hidden } from "../Hidden";
import { useAppDrawerContext } from "./AppDrawerContext";

type ResponsiveDrawerProps = {
  children?: ReactNode;
  Drawer: ComponentType<DrawerProps>;
};

export function ResponsiveDrawer(props: ResponsiveDrawerProps) {
  const { open, toggle } = useAppDrawerContext();
  const { children, Drawer } = props;

  return (
    <>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={toggle}
          ModalProps={{ keepMounted: true }}
        >
          {children}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer variant="permanent" open>
          {children}
        </Drawer>
      </Hidden>
    </>
  );
}
