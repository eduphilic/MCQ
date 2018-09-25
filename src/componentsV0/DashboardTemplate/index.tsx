import React, { ComponentType, SFC } from "react";
import styled from "styled";

import { ContentCenterWrapper } from "componentsV0/ContentCenterWrapper";
import {
  ResponsiveDrawerFrame,
  ResponsiveDrawerFrameProps,
} from "componentsV0/ResponsiveDrawerFrame";

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
    backgroundColor,
    pageContentsTopPadding,
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
      backgroundColor={backgroundColor}
      pageContentsTopPadding={pageContentsTopPadding}
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
