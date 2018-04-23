import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React, { Fragment, ReactNode } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { PersistentScrollPositionProvider } from ".";
import { PlaceholderImage } from "../../atoms/PlaceholderImage";

storiesOf("Utils", module).add(
  "PersistentScrollPosition",
  withInfo({ inline: false })(() => {
    const pageContents: ReactNode[] = [];
    for (let i = 0; i < 20; i += 1) {
      pageContents.push(
        <Fragment key={i}>
          <Link to={`/some-link-${i}`}>Some Link {i}</Link>
          <PlaceholderImage />
        </Fragment>,
      );
    }

    return (
      <Router>
        <PersistentScrollPositionProvider>
          {pageContents}
        </PersistentScrollPositionProvider>
      </Router>
    );
  }),
);
