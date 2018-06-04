import React, { ComponentType, SFC } from "react";
import { Route, RouteProps } from "react-router-dom";

import { UserTemplate } from "components/UserTemplate";

export interface UserRouteProps extends RouteProps {
  component: ComponentType;
}

export const UserRoute: SFC<UserRouteProps> = props => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={() => (
        <UserTemplate>
          <Component />
        </UserTemplate>
      )}
    />
  );
};
