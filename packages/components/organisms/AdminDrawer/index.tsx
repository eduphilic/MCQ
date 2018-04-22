import Drawer from "material-ui/Drawer";
import React, { SFC } from "react";
import styled from "styled";
import { AdminAppDrawerTheme } from "theme";
import { AdminDrawerStateConsumer } from "../../molecules/AdminDrawerManager";
import { AdminDrawerContents } from "../../organisms/AdminDrawerContents";
import { drawerWidth } from "../../organisms/ResponsiveDrawerFrame";

export const AdminDrawer: SFC<{}> = () => {
  return (
    <AdminDrawerStateConsumer>
      {drawerState => (
        <AdminAppDrawerTheme>
          <StyledDrawer
            variant="persistent"
            anchor="left"
            open={drawerState.open}
            classes={{ paper: "drawerPaper" }}
          >
            <AdminDrawerContents />
          </StyledDrawer>
        </AdminAppDrawerTheme>
      )}
    </AdminDrawerStateConsumer>
  );
};

const StyledDrawer = styled(Drawer)`
  .drawerPaper {
    position: relative;
    width: ${drawerWidth}px;
  }
`;
