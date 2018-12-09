import { DrawerProps } from "@material-ui/core/Drawer";
import withWidth, { isWidthDown, WithWidth } from "@material-ui/core/withWidth";
import React, { ComponentType, ReactNode } from "react";
import { useAppDrawerContext } from "./AppDrawerContext";

type ResponsiveDrawerProps = {
  children?: ReactNode;
  Drawer: ComponentType<DrawerProps>;
};

export const ResponsiveDrawer = withWidth()(
  (props: WithWidth & ResponsiveDrawerProps) => {
    const { open, toggle } = useAppDrawerContext();
    const { children, Drawer, width } = props;
    const isMobile = isWidthDown("sm", width);

    return (
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor={isMobile ? "left" : undefined}
        open={!isMobile || open}
        onClose={toggle}
        ModalProps={isMobile ? { keepMounted: true } : undefined}
      >
        {children}
      </Drawer>
    );
  },
);
