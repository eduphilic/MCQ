import React, { SFC } from "react";

import { PageTitleConsumer } from "../PageTitleConsumer";
import { PageTitleSetter, PageTitleSetterProps } from "./PageTitleSetter";

/**
 * Connects PageTitleSetter to the PageTitleContext.
 */
export const PageTitleSetterContainer: SFC<PageTitleSetterProps> = props => {
  const { title } = props;

  return (
    <PageTitleConsumer>
      {pageTitleApi => (
        <PageTitleSetter pageTitleApi={pageTitleApi} title={title} />
      )}
    </PageTitleConsumer>
  );
};
