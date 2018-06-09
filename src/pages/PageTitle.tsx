import { getPageTitleFromLocation } from "common/utils";
import React, { SFC } from "react";
import { Helmet } from "react-helmet";
import { RouteComponentProps, withRouter } from "react-router-dom";

// tslint:disable-next-line:no-empty-interface
export interface PageTitleProps extends RouteComponentProps<{}> {}

/**
 * Updates the page title to match the currently view page.
 */
const PageTitle: SFC<PageTitleProps> = props => {
  const { children, location } = props;

  const title = getPageTitleFromLocation(location.pathname);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
};

const PageTitleWithRouter = withRouter(PageTitle);
export { PageTitleWithRouter as PageTitle };
