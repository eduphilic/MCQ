import React, { ComponentType, SFC } from "react";
import styled from "styled";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import {
  ResponsiveDrawerFrame,
  ResponsiveDrawerFrameProps,
} from "components/ResponsiveDrawerFrame";

export interface DashboardTemplateProps extends ResponsiveDrawerFrameProps {
  /**
   * Optional wrapper element to use to wrap the page contents from the
   * "children" prop. This is used in the AdminDashboard to wrap the page
   * contents in a side sheet component.
   */
  pageContentsWrapperComponent?: ComponentType<any>;
}

export const DashboardTemplate: SFC<DashboardTemplateProps> = props => {
  const {
    children,
    appBarNode,
    drawerThemeElement,
    drawerContentsNode,
    pageContentsWrapperComponent: PageContentsWrapperComponent,
  } = props;

  let wrappedPageContents = (
    <ContentCenterWrapperWithVerticalMargins>
      {children}
    </ContentCenterWrapperWithVerticalMargins>
  );
  if (PageContentsWrapperComponent) {
    wrappedPageContents = (
      <PageContentsWrapperComponent>
        {wrappedPageContents}
      </PageContentsWrapperComponent>
    );
  }

  return (
    <ResponsiveDrawerFrame
      appBarNode={appBarNode}
      drawerContentsNode={drawerContentsNode}
      drawerThemeElement={drawerThemeElement}
    >
      {wrappedPageContents}
    </ResponsiveDrawerFrame>
  );
};

/** Center page contents and add vertical margins between child components. */
const ContentCenterWrapperWithVerticalMargins = styled(ContentCenterWrapper)`
  > * {
    margin-bottom: ${({ theme }) => theme.spacing.unit * 3}px;
  }
`;
