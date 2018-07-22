import { drawerWidth, fromToolbarHeight } from "css";
import React, { Component, ReactNode } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
// @ts-ignore
import { Tunnel } from "react-tunnels";
import styled from "styled";
import { PageContentWrapper } from "../PageContentWrapper";

export type BottomToolbarDockProps = {
  className?: string;
  toolbarNode: ReactNode;

  /**
   * Required key, use to force re-render if the matched key is not found in the
   * dom.
   */
  name: string;

  /**
   * List of routes to render the bottom toolbar on. This is used because the
   * swipeable navigation interface renders all child pages at the same time.
   */
  matchedRoutes: string[];
};

const BottomToolbarDock = withRouter(styled<
  BottomToolbarDockProps & RouteComponentProps<{}>
>(props => {
  const {
    className,
    children,
    toolbarNode,
    matchedRoutes,
    location: { pathname },
    name,
  } = props;

  const inSwipeableNav = !!document.querySelector(".swipeable-nav");
  const shouldRenderToolbar = matchedRoutes.includes(pathname);

  /* tslint:disable-next-line:no-console */
  console.log("pathname", pathname);

  return (
    <div className={className}>
      {inSwipeableNav ? (
        <Tunnel id="swipeable-nav-bottom-navigation-bar">
          {shouldRenderToolbar ? <div id={name}>{toolbarNode}</div> : null}
        </Tunnel>
      ) : (
        <ToolbarWrapper>{toolbarNode}</ToolbarWrapper>
      )}

      <StyledPageContentsWrapper verticalGutters>
        {children}
      </StyledPageContentsWrapper>

      <ToolbarSpacer />
    </div>
  );
})`
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow-y: auto;
`);

type HackState = {
  tick: number;
};

/**
 * A terrible and ugly hack. This is used to force a re-render when the presence
 * of a toolbar is changed. For some reason, the toolbar only appears or
 * disappears after the next render. This hack, forces a re-render.
 */
const BottomToolbarDockForceRerenderHack = withRouter(
  class extends Component<
    BottomToolbarDockProps & RouteComponentProps<{}>,
    HackState
  > {
    state: HackState = { tick: 0 };

    componentDidMount() {
      this.handleUpdate();
    }

    componentDidUpdate() {
      this.handleUpdate();
    }

    render() {
      const { name, ...rest } = this.props;
      const { tick } = this.state;

      return <BottomToolbarDock name={`${name}-${tick}`} {...rest} />;
    }

    handleUpdate = () => {
      const {
        name,
        matchedRoutes,
        location: { pathname },
      } = this.props;
      const { tick } = this.state;

      const inSwipeableNav = !!document.querySelector(".swipeable-nav");
      const shouldRenderToolbar = matchedRoutes.includes(pathname);
      if (!inSwipeableNav) return;

      if (shouldRenderToolbar) {
        setTimeout(() => {
          if (!document.querySelector(`#${name}-${tick}`)) {
            this.setState(state => ({ tick: state.tick + 1 }));
          }
        }, 166);
      } else {
        setTimeout(() => {
          if (document.querySelector(`#${name}-${tick}`)) {
            this.setState(state => ({ tick: state.tick + 1 }));
          }
        }, 166);
      }
    };
  },
);
export { BottomToolbarDockForceRerenderHack as BottomToolbarDock };

const ToolbarSpacer = styled.div`
  ${fromToolbarHeight("height", height => `${height - 8}px`)};
`;

const ToolbarWrapper = styled.div`
  ${fromToolbarHeight("height")};

  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 1;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-left: ${drawerWidth}px;
  }
`;

const StyledPageContentsWrapper = styled(PageContentWrapper)`
  padding: 0;
`;
