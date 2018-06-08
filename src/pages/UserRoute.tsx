import React, { ComponentType, SFC } from "react";
import { Route, RouteProps } from "react-router-dom";

import { UserTemplate, UserTemplateProps } from "components/UserTemplate";

export interface UserRouteProps extends RouteProps {
  component: ComponentType;

  navigationLinkComponentMap: UserTemplateProps["navigationLinkComponentMap"];
}

export const UserRoute: SFC<UserRouteProps> = props => {
  const { component: Component, navigationLinkComponentMap, ...rest } = props;

  return (
    <Route
      {...rest}
      render={() => (
        <UserTemplate navigationLinkComponentMap={navigationLinkComponentMap}>
          <Component />
        </UserTemplate>
      )}
    />
  );
};
