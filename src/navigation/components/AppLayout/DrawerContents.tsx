import { strings } from "localization";
import React, { SFC } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled";
import { INavigationLink } from "../../models/INavigationLink";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { DrawerLogo } from "components/DrawerLogo";

export interface DrawerContentsProps {
  /**
   * List of links to include in the drawer.
   */
  links: INavigationLink[];
}

/**
 * Contents of the app drawer for the admin and user dashboards. Contains links
 * to each dashboard page.
 */
export const DrawerContents: SFC<DrawerContentsProps> = props => {
  const { links } = props;

  const listLinks = links.map(link => (
    <DrawerLink key={link.titleLocalizationKey} {...link} />
  ));

  return (
    <DrawerList>
      <DrawerLogoLink {...links[0]} />

      {listLinks}
    </DrawerList>
  );
};

const listItemColorNotActive = "#999696";
const listItemColorActive = "#fff";

const DrawerList = styled<{ className?: string }>(({ className, children }) => (
  <List className={className} component="nav">
    {children}
  </List>
))`
  padding-top: 0;
`;

const DrawerLogoLink = styled<INavigationLink & { className?: string }>(
  ({ className, to, disabled }) => (
    <ListItem
      className={className}
      button={!disabled}
      component={
        !disabled
          ? (listItemProps: any) => <Link to={to} {...listItemProps} />
          : undefined
      }
    >
      <DrawerLogo />
    </ListItem>
  ),
)`
  padding: 8px 4px 8px 16px;
  cursor: ${props => props.disabled && "default"};

  > div {
    width: 100%;
  }
`;

const DrawerLink = styled<INavigationLink & { className?: string }>(
  ({ className, titleLocalizationKey, to, iconElement, disabled }) => (
    <ListItem
      className={className}
      button={!disabled}
      component={
        !disabled
          ? (listItemProps: any) => (
              <NavLink to={to} activeClassName="active" {...listItemProps} />
            )
          : undefined
      }
    >
      <DrawerLinkOptionalIcon iconElement={iconElement} />
      <ListItemText>{strings[titleLocalizationKey]}</ListItemText>
    </ListItem>
  ),
)`
  cursor: ${props => props.disabled && "default"};

  span {
    color: ${listItemColorNotActive};
  }

  &.active span {
    color: ${listItemColorActive};
  }
`;

const DrawerLinkOptionalIcon = styled<{
  className?: string;
  iconElement: INavigationLink["iconElement"];
}>(
  ({ className, iconElement }) =>
    iconElement ? (
      <ListItemIcon className={className}>{iconElement}</ListItemIcon>
    ) : null,
)`
  color: ${listItemColorNotActive};

  .active & {
    color: ${listItemColorActive};
  }
`;
