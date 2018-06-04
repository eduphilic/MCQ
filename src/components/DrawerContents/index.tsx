import strings from "l10n";
import React, { SFC } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { Logo } from "components/Logo";

type Links = [keyof typeof strings, string][];

export interface DrawerContentsProps {
  /**
   * An array of: [localizationKey, routerPath].
   *
   * The first item is used at the link for the logo image.
   */
  links: Links;
}

/**
 * Contents of the app drawer for the admin and user dashboards. Contains links
 * to each dashboard page.
 */
export const DrawerContents: SFC<DrawerContentsProps> = props => {
  const { links } = props;

  const listLinks = links.map(([title, path]) => (
    <StyledListItem
      key={title}
      button
      component={listItemProps => (
        <NavLink to={path} activeClassName="active" {...listItemProps as any} />
      )}
    >
      <ListItemText>{strings[title]}</ListItemText>
    </StyledListItem>
  ));

  return (
    <StyledList component="nav">
      <LogoListItem
        button
        component={listItemProps => (
          <Link to={links[0][1]} {...listItemProps as any}>
            <DrawerLogo />
          </Link>
        )}
      />

      {listLinks}
    </StyledList>
  );
};

const StyledList = styled(List)`
  padding-top: 0;
`;

const StyledListItem = styled(ListItem)`
  span {
    color: #999696;
  }

  &.active span {
    color: #fff;
  }
`;

const LogoListItem = styled(ListItem)`
  padding: 8px 4px 8px 16px;

  > div {
    width: 100%;
  }
`;

const DrawerLogo = styled(Logo)`
  > svg {
    width: 44.45px !important;
  }
`;
