import { strings } from "localization";
import React, { SFC } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled";

import { NavigationLinks } from "common/types/NavigationLinks";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { DrawerLogo } from "components/DrawerLogo";

export interface DrawerContentsProps {
  /**
   * List of links to include in the drawer.
   */
  links: NavigationLinks;
}

/**
 * Contents of the app drawer for the admin and user dashboards. Contains links
 * to each dashboard page.
 */
export const DrawerContents: SFC<DrawerContentsProps> = props => {
  const { links } = props;

  const listLinks = links.map(link => {
    const { titleLocalizationKey, to, iconElement } = link;

    return (
      <ListItemWithActiveStyle
        key={titleLocalizationKey}
        button
        component={listItemProps => (
          <NavLink to={to} activeClassName="active" {...listItemProps as any} />
        )}
      >
        {iconElement && (
          <ListItemIconWithActiveStyle>
            {iconElement}
          </ListItemIconWithActiveStyle>
        )}
        <ListItemText>{strings[titleLocalizationKey]}</ListItemText>
      </ListItemWithActiveStyle>
    );
  });

  return (
    <ListNoTopPadding component="nav">
      <LogoListItem
        button
        component={listItemProps => (
          <Link to={links[0].to} {...listItemProps as any}>
            <DrawerLogo />
          </Link>
        )}
      />

      {listLinks}
    </ListNoTopPadding>
  );
};

const ListNoTopPadding = styled(List)`
  padding-top: 0;
`;

const listItemColorNotActive = "#999696";
const listItemColorActive = "#fff";

const ListItemWithActiveStyle = styled(ListItem)`
  span {
    color: ${listItemColorNotActive};
  }

  &.active span {
    color: ${listItemColorActive};
  }
`;

const ListItemIconWithActiveStyle = styled(ListItemIcon)`
  color: ${listItemColorNotActive};

  .active & {
    color: ${listItemColorActive};
  }
`;

const LogoListItem = styled(ListItem)`
  padding: 8px 4px 8px 16px;

  > div {
    width: 100%;
  }
`;
