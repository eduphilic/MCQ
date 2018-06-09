import { NavigationLinks } from "common/types/NavigationLinks";
import React, { ComponentType, SFC } from "react";
import { Route, RouteProps } from "react-router-dom";

import { UserTemplate } from "components/UserTemplate";

export interface UserRouteProps extends RouteProps {
  component: ComponentType;

  links: NavigationLinks;
}

export const UserRoute: SFC<UserRouteProps> = props => {
  const { component: Component, links, ...rest } = props;

  return (
    <Route
      {...rest}
      render={() => (
        <UserTemplate links={links}>
          <Component />
        </UserTemplate>
      )}
    />
  );
};
