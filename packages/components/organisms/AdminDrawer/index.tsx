import strings from "l10n";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemText } from "material-ui/List";
import React, { SFC } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled";
import { AdminAppDrawerTheme } from "theme";
import { AdminDrawerStateConsumer } from "../../molecules/AdminDrawerManager";
import { Logo } from "../../molecules/Logo";

export const drawerWidth = 240;

type Links = [keyof typeof strings, string][];

// Map localization strings to link titles.
const links: Links = [
  ["adminLinkDashboard", "dashboard"],
  ["adminLinkEntryManager", "entry-manager"],
  ["adminLinkQuestionManager", "question-manager"],
  ["adminLinkTestManager", "test-manager"],
  ["adminLinkUserManager", "user-manager"],
  ["adminLinkPlanManager", "plan-manager"],
  ["adminLinkIndexManager", "index-manager"],
  ["adminLinkRevenueManager", "revenue-manager"],
];

export const AdminDrawer: SFC<{}> = () => {
  const listLinks = links.map(([title, path]) => (
    <ListItem
      key={title}
      className="link"
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
    </ListItem>
  ));

  return (
    <AdminDrawerStateConsumer>
      {drawerState => (
        <AdminAppDrawerTheme>
          <StyledDrawer
            variant="persistent"
            anchor="left"
            open={drawerState.open}
            classes={{ paper: "drawerPaper" }}
          >
            <List className="list" component="nav">
              <ListItem
                className="header"
                button
                component={props => (
                  <Link to="/admin/dashboard" {...props as any}>
                    <Logo />
                  </Link>
                )}
              />

              {listLinks}
            </List>
          </StyledDrawer>
        </AdminAppDrawerTheme>
      )}
    </AdminDrawerStateConsumer>
  );
};

const StyledDrawer = styled(Drawer)`
  .drawerPaper {
    position: relative;
    width: ${drawerWidth}px;
  }

  .list {
    padding-top: 0;
  }

  .header {
    padding: 8px 4px 8px 16px;
    > div {
      width: 100%;
    }
  }

  .link h3 {
    color: #999696;
  }

  .link.active h3 {
    color: #fff;
  }
`;
