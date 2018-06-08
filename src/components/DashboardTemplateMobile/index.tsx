import React, { SFC } from "react";
import ReactSwipe from "react-swipe";
import styled from "styled";

import { DashboardTemplateProps } from "../DashboardTemplate";

// tslint:disable-next-line:no-empty-interface
export interface DashboardTemplateMobileProps
  extends Omit<DashboardTemplateProps, "drawerContentsNode"> {}

export const DashboardTemplateMobile: SFC<
  DashboardTemplateMobileProps
> = props => {
  const { appBarNode } = props;

  return (
    <Wrapper>
      {appBarNode}

      <ReactSwipe swipeOptions={{ continuous: false }}>
        <div>Pane 1</div>
        <div>Pane 2</div>
        <div>Pane 3</div>
      </ReactSwipe>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > *:nth-child(2) {
    flex: 1;
  }
`;
