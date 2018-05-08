import Paper from "material-ui/Paper";
import Toolbar from "material-ui/Toolbar";
import React, { Component } from "react";
import styled from "styled";

// tslint:disable-next-line:no-empty-interface
export interface DashboardSecondaryToolbarProps {}

const Spacer = styled.div`
  ${({ theme }) => theme.breakpoints.up("sm")} {
    flex: 1;
  }
`;

export class DashboardSecondaryToolbar extends Component<
  DashboardSecondaryToolbarProps
> {
  static Spacer = Spacer;

  render() {
    const { children } = this.props;

    return (
      <Paper>
        <MultilineMobileToolbar>{children}</MultilineMobileToolbar>
      </Paper>
    );
  }
}

const MultilineMobileToolbar = styled(Toolbar)`
  ${({ theme }) => theme.breakpoints.down("xs")} {
    flex-wrap: wrap;
    padding: ${({ theme }) => theme.spacing.unit}px 0;

    * {
      width: 100%;
      text-align: left;
    }
  }
`;
