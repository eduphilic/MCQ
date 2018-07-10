// tslint:disable:import-name
import { drawerWidth } from "css";
import React, { SFC } from "react";
import { connect } from "react-redux";
import { State } from "store";
import styled from "styled";

import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { LanguageToggleButton } from "./LanguageToggleButton";
import { LogoutButton } from "./LogoutButton";

type StateProps = {
  locationPageTitleWithoutProductName: string;
};

type OwnProps = {};
export { OwnProps as AppBarProps };

type Props = StateProps & OwnProps;

const AppBar: SFC<Props> = props => {
  const { locationPageTitleWithoutProductName } = props;

  return (
    <ResponsiveWidthAppBar>
      <Toolbar>
        {/* Page Title */}
        <Typography variant="title" color="inherit" style={{ fontWeight: 400 }}>
          {locationPageTitleWithoutProductName}
        </Typography>

        <FlexSpacer />

        <LanguageToggleButton />
        <LogoutButton />
      </Toolbar>
    </ResponsiveWidthAppBar>
  );
};

const AppBarContainer = connect<StateProps, {}, OwnProps, State>(
  ({ navigation: { locationPageTitleWithoutProductName } }) => ({
    locationPageTitleWithoutProductName,
  }),
)(AppBar);
export { AppBarContainer as AppBar };

const ResponsiveWidthAppBar = styled<{ className?: string }>(
  ({ className, children }) => (
    <MuiAppBar className={className} color="inherit">
      {children}
    </MuiAppBar>
  ),
)`
  width: 100%;
  left: 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    left: ${drawerWidth}px;
    width: calc(100% - ${drawerWidth}px);
  }
`;

const FlexSpacer = styled.div`
  flex: 1;
`;
