import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled";

import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

export type DevelopmentAdminDashboardSnackbarProps = RouteComponentProps<void>;

class DevelopmentAdminDashboardSnackbar extends Component<
  DevelopmentAdminDashboardSnackbarProps
> {
  handleButtonClick = (path: string) => {
    if (path === "/storybook") {
      const url =
        process.env.NODE_ENV === "development"
          ? "http://localhost:9001"
          : "/storybook/";
      window.open(url);
      return;
    }

    this.props.history.push(path);
  };

  render() {
    const snackbarContent = (
      <SnackbarContentExtraVerticalHightMobile
        message={<span>Development Build</span>}
        action={
          <>
            {[
              { to: "/dashboard", title: "User" },
              { to: "/admin/dashboard", title: "Admin" },
              { to: "/exam", title: "Exam" },
              { to: "/storybook", title: "Storybook" },
            ].map(l => (
              <Button
                key={l.to}
                color="secondary"
                onClick={() => this.handleButtonClick(l.to)}
              >
                {l.title}
              </Button>
            ))}
          </>
        }
      />
    );

    return (
      <Snackbar
        open
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        {snackbarContent}
      </Snackbar>
    );
  }
}

const DevelopmentAdminDashboardSnackbarWithRouter = withRouter(
  DevelopmentAdminDashboardSnackbar,
);

export {
  DevelopmentAdminDashboardSnackbarWithRouter as DevelopmentAdminDashboardSnackbar,
};

const SnackbarContentExtraVerticalHightMobile = styled(SnackbarContent).attrs({
  classes: {
    action: "action",
  },
})`
  .action {
    flex-wrap: wrap;
  }
`;
