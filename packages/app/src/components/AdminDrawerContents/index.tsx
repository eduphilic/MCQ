import strings from "l10n";
import React, { SFC } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { Logo } from "components/Logo";

type Links = [keyof typeof strings, string][];

// Map localization strings to link titles.
const links: Links = [
  ["adminLinkDashboard", "dashboard"],
  ["adminLinkEntryManager", "entry-manager"],
  ["adminLinkTestManager", "test-manager"],
  ["adminLinkIndexManager", "index-manager"],
  ["adminLinkPlanManager", "plan-manager"],
  ["adminLinkQuestionManager", "question-manager"],
  ["adminLinkUserManager", "user-manager"],
  ["adminLinkRevenueManager", "revenue-manager"],
];

/**
 * Contents of the app drawer for the admin dashboard. Contains links to each
 * admin dashboard page.
 */
export const AdminDrawerContents: SFC<{}> = () => {
  const listLinks = links.map(([title, path]) => (
    <StyledListItem
      key={title}
      button
      component={props => (
        <NavLink
          to={`/admin/${path}`}
          activeClassName="active"
          {...props as any}
        />
      )}
    >
      <ListItemText>{strings[title]}</ListItemText>
    </StyledListItem>
  ));

  return (
    <StyledList component="nav">
      <LogoListItem
        button
        component={props => (
          <Link to="/admin/dashboard" {...props as any}>
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
