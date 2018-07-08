import { bottomNavBoxShadow } from "css";
import { strings } from "localization";
import React, { SFC } from "react";
import SwipeableViews, { SwipeableViewsProps } from "react-swipeable-views";
import styled from "styled";
import { INavigationLink } from "../../models/INavigationLink";

import BottomNavigation, {
  BottomNavigationProps,
} from "@material-ui/core/BottomNavigation";
import BottomNavigationAction, {
  BottomNavigationActionProps,
} from "@material-ui/core/BottomNavigationAction";
import Paper from "@material-ui/core/Paper";

import { NavTheme } from "./NavTheme";

export type SwipeableNavProps = {
  links: INavigationLink[];
};

export const SwipeableNav: SFC<SwipeableNavProps> = props => {
  const { links } = props;

  return (
    <Wrapper>
      {/* Place bottom navigation first so shadow overlaps swipe panes. */}
      <NavTheme>
        <StyledBottomNavigation>
          {links.map(l => (
            <StyledBottomNavigationAction
              key={l.titleLocalizationKey}
              icon={l.iconElement}
              value={l.to}
              label={strings[l.titleLocalizationKey]}
            />
          ))}
        </StyledBottomNavigation>
      </NavTheme>

      <StyledSwipeableViews>
        {links.map(({ component: PaneComponent, titleLocalizationKey }) => (
          <PaneComponent key={titleLocalizationKey} />
        ))}
      </StyledSwipeableViews>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StyledSwipeableViews = styled<Omit<SwipeableViewsProps, "ref">>(props => (
  <SwipeableViews {...props} />
))`
  height: calc(100% - 56px);
`;

const StyledBottomNavigation = styled<BottomNavigationProps>(props => (
  <StyledPaper>
    <BottomNavigation showLabels {...props} />
  </StyledPaper>
))`
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const StyledPaper = styled(Paper)`
  ${bottomNavBoxShadow};
  order: 2;
  z-index: 1;
`;

const StyledBottomNavigationAction = styled<BottomNavigationActionProps>(
  ({ classes, ...rest }) => (
    <BottomNavigationAction
      classes={{
        ...classes,
        label: "label",
        selected: "selected",
      }}
      {...rest}
    />
  ),
)`
  color: rgba(255, 255, 255, 0.45);

  &.selected {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  .label {
    white-space: nowrap;
    overflow: hidden;
  }
`;
