import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { StorybookPlaceholderImage } from "components/storybook/StorybookPlaceholderImage";
import { PersistentScrollPositionProvider } from ".";

storiesOf("Components", module).add(
  "PersistentScrollPosition",
  withInfo({ inline: false })(() => {
    const pageContents = Array.from({ length: 20 }, (_, index) => (
      <Fragment key={index}>
        <Link to={`/some-link-${index}`}>Some Link {index}</Link>
        <StorybookPlaceholderImage />
      </Fragment>
    ));

    return (
      <Router>
        <PersistentScrollPositionProvider>
          {pageContents}
        </PersistentScrollPositionProvider>
      </Router>
    );
  }),
);
