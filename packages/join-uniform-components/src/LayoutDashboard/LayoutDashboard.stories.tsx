import { css } from "@join-uniform/theme";
import { storiesOf } from "@storybook/react";
import React from "react";
import { storiesProps as appDrawerStoriesProps } from "../AppDrawer/storiesProps";
import { LayoutDashboard } from "./LayoutDashboard";

const stories = storiesOf("LayoutDashboard", module);

stories.add("default", () => (
  <LayoutDashboard
    title="Dashboard"
    onLogoutButtonClick={noop}
    drawerTheme={appDrawerStoriesProps.theme}
    drawerLinks={appDrawerStoriesProps.links}
    drawerLogoSrc={appDrawerStoriesProps.logoSrc}
    DrawerLinkComponent={appDrawerStoriesProps.LinkComponent}
  >
    {Array.from({ length: 30 }, (_item, index) => (
      <img
        key={index}
        src="https://placekitten.com/g/400/400"
        css={css`
          display: block;
        `}
      />
    ))}
  </LayoutDashboard>
));

// tslint:disable-next-line:no-empty
function noop() {}
