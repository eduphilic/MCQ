import strings from "l10n";
import React, { ReactElement, SFC } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Logo } from "components/Logo";

type LinkType =
  | [keyof typeof strings, string]
  | [keyof typeof strings, string, ReactElement<any>];
type Links = LinkType[];

export interface DrawerContentsProps {
  /**
   * An array of: [localizationKey, routerPath, icon (optional)].
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

  const listLinks = links.map((link: LinkType) => {
    const [title, path] = link;
    let icon: ReactElement<any> | undefined;

    if (link.length === 3) icon = link[2];

    return (
      <ListItemWithActiveStyle
        key={title}
        button
        component={listItemProps => (
          <NavLink
            to={path}
            activeClassName="active"
            {...listItemProps as any}
          />
        )}
      >
        {icon && (
          <ListItemIconWithActiveStyle>{icon}</ListItemIconWithActiveStyle>
        )}
        <ListItemText>{strings[title]}</ListItemText>
      </ListItemWithActiveStyle>
    );
  });

  return (
    <ListNoTopPadding component="nav">
      <LogoListItem
        button
        component={listItemProps => (
          <Link to={links[0][1]} {...listItemProps as any}>
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

const DrawerLogo = styled(Logo)`
  > svg {
    width: 44.45px !important;
  }
`;
