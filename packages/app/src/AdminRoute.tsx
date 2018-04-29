import React, { SFC } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RootState } from "store";

interface AdminRouteProps extends RouteProps {
  authenticated: boolean;
}

const AdminRouteBase: SFC<AdminRouteProps> = props => {
  const { component: Component, authenticated, ...rest } = props;

  return (
    <Route
      {...rest}
      component={authenticated ? Component : undefined}
      render={authenticated ? undefined : () => <Redirect to="/admin" />}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  authenticated: state.app.user && state.app.user.isAdmin,
});

export const AdminRoute = connect(mapStateToProps)(AdminRouteBase);
