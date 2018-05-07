import strings from "l10n";
import List, { ListItem, ListItemText } from "material-ui/List";
import React, { SFC } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled";
import { Logo } from "../../molecules/Logo";

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
            <Logo />
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
  h3 {
    color: #999696;
  }

  &.active h3 {
    color: #fff;
  }
`;

const LogoListItem = styled(ListItem)`
  padding: 8px 4px 8px 16px;

  > div {
    width: 100%;
  }
`;
