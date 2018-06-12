import { Location } from "history";
import React, { Component, createContext } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

export interface PersistentScrollPositionProps
  extends RouteComponentProps<any> {}

interface PersistentScrollPositionState {
  location: Location | null;
}

const initialState: PersistentScrollPositionState = { location: null };
const PersistentScrollPositionContext = createContext<
  PersistentScrollPositionState
>(initialState);

/**
 * Stores page scroll positions to session storage so that navigation among
 * pages start at the top or a previous position.
 *
 * Implemented using React.Context so that behavior can be overridden/extended
 * laster if needed, for instance in tab interfaces.
 *
 * @see https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
 */
class PersistentScrollPositionProviderBase extends Component<
  PersistentScrollPositionProps,
  PersistentScrollPositionState
> {
  static getDerivedStateFromProps(
    nextProps: PersistentScrollPositionProps,
    prevState: PersistentScrollPositionState,
  ): Partial<PersistentScrollPositionState> | null {
    const { location } = nextProps;
    if (prevState.location === location) return null;

    // Store scroll position of last page.
    if (prevState.location !== null) {
      sessionStorage.setItem(
        prevState.location.pathname,
        JSON.stringify({ x: window.scrollX, y: window.scrollY }),
      );
    }

    // Restore scroll position if available or scroll to top.
    const previousScrollPositionString = sessionStorage.getItem(
      location.pathname,
    );
    if (previousScrollPositionString) {
      const { x, y }: { x: number; y: number } = JSON.parse(
        previousScrollPositionString,
      );
      window.scrollTo(x, y);
    } else {
      window.scrollTo(0, 0);
    }

    return { location };
  }

  state: PersistentScrollPositionState = { location: null };

  render() {
    return (
      <PersistentScrollPositionContext.Provider value={this.state}>
        {this.props.children}
      </PersistentScrollPositionContext.Provider>
    );
  }
}

export const PersistentScrollPositionProvider = withRouter(
  PersistentScrollPositionProviderBase,
);
