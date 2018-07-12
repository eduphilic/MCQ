import React, { SFC } from "react";
import styled from "styled";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export const OnboardingBottomDockToolbar: SFC<{}> = props => (
  <AppBar position="static" color="default">
    <Toolbar>
      <ToolbarContentsWrapper>{props.children}</ToolbarContentsWrapper>
    </Toolbar>
  </AppBar>
);

const ToolbarContentsWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1232px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
`;
