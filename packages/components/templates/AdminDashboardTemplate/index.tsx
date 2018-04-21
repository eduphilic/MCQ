import AppBar from "material-ui/AppBar";
import React, { SFC } from "react";
import styled from "styled";

const drawerWidth = 240;

export const AdminDashboardTemplate: SFC<{}> = () => {
  return (
    <Wrapper>
      <AppBar className="appBar" position="absolute" color="inherit">
        <span>AppBar</span>
      </AppBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  .appBar {
    width: calc(100% - ${drawerWidth}px);
    margin-left: ${drawerWidth}px;
  }
`;
