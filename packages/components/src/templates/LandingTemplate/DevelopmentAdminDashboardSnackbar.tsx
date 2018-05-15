import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

export type DevelopmentAdminDashboardSnackbarProps = RouteComponentProps<void>;

class DevelopmentAdminDashboardSnackbar extends Component<
  DevelopmentAdminDashboardSnackbarProps
> {
  handleButtonClick = (path: string) => {
    if (process.env.NODE_ENV === "development" && path === "/storybook") {
      window.open("http://localhost:9001");
      return;
    }

    this.props.history.push(path);
  };

  render() {
    return (
      <Snackbar
        open
        message={<span>Development Build</span>}
        action={
          <>
            <Button
              onClick={() => this.handleButtonClick("/admin")}
              color="secondary"
            >
              Admin Dashboard
            </Button>
            <Button
              onClick={() => this.handleButtonClick("/storybook")}
              color="secondary"
            >
              Storybook
            </Button>
          </>
        }
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      />
    );
  }
}

const DevelopmentAdminDashboardSnackbarWithRouter = withRouter(
  DevelopmentAdminDashboardSnackbar,
);

export {
  DevelopmentAdminDashboardSnackbarWithRouter as DevelopmentAdminDashboardSnackbar,
};
