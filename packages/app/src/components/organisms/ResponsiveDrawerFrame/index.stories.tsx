import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React, { ReactNode } from "react";
import styled, { withProps } from "styled";
import { ResponsiveDrawerFrame } from ".";
import { PlaceholderImage } from "../../atoms/PlaceholderImage";

storiesOf("Organisms", module).add(
  "ResponsiveDrawerFrame",
  withInfo({ inline: false })(() => {
    const pageContents: ReactNode[] = [];
    for (let i = 0; i < 50; i += 1) {
      pageContents.push(<PlaceholderImage key={i} />);
    }

    return (
      <ResponsiveDrawerFrame
        mobileOpen={boolean("Mobile Open", false)}
        appBarNode={<Section color="#8989ff">App Bar Node</Section>}
        pageContentsNode={<Section color="#e46b6b">{pageContents}</Section>}
        drawerContentsNode={<Section color="#54f1b5">Drawer Contents</Section>}
      />
    );
  }),
);

const Section = withProps<{ color: string }>()(styled.div)`
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
`;
