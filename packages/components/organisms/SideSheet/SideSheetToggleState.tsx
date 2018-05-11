import lodashDebounce from "lodash.debounce";
import React, { Component, createContext } from "react";

export interface SideSheetToggleStateApi {
  /**
   * Whether the side sheet is open (toggled) on mobile.
   */
  open: boolean;

  /**
   * Whether or not the toggle button is visible in the app bar. Set to true
   * when there is sheet contents.
   */
  toggleButtonVisibility: boolean;

  /**
   * True when the screen width is large enough to accommodate the fixed panel.
   */
  fixedPanelVisible: boolean;

  /**
   * Toggles the open state of the side sheet on mobile. Should be called by way
   * of a button.
   */
  toggleOpen: () => void;

  /**
   * Sets visibility of toggle button. Called with true if there is panel
   * contents.
   */
  setToggleButtonVisibility: (visibility: boolean) => any;
}

const noop = () => {
  throw new Error("SideSheet context action called outside provider.");
};

const context = createContext<SideSheetToggleStateApi>({
  open: false,
  toggleButtonVisibility: false,
  fixedPanelVisible: true,
  toggleOpen: noop,
  setToggleButtonVisibility: noop,
});

interface SideSheetToggleStateProviderState {
  open: boolean;
  toggleButtonVisibility: boolean;
  fixedPanelVisible: boolean;
}

/**
 * Provides tracking of the side sheet open (toggle) state on mobile. It also
 * provides a callback that can toggle the open state.
 */
export class SideSheetToggleStateProvider extends Component<
  {},
  SideSheetToggleStateProviderState
> {
  state: SideSheetToggleStateProviderState = {
    open: false,
    toggleButtonVisibility: false,
    fixedPanelVisible: true,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = lodashDebounce(() => {
    // https://material.io/design/layout/responsive-layout-grid.html#breakpoints
    // Portrait - Large Tablet - Upper Bound
    const fixedPanelVisible = window.innerWidth > 839;
    if (this.state.fixedPanelVisible !== fixedPanelVisible) {
      this.setState({ fixedPanelVisible });
    }
  }, 166 /* Corresponds to 10 frames at 60 Hz. */);

  handleToggleOpen = () => this.setState({ open: !this.state.open });

  handleToggleButtonVisibilityChange = (visibility: boolean) =>
    this.setState({ toggleButtonVisibility: visibility });

  render() {
    const contextValue: SideSheetToggleStateApi = {
      ...this.state,
      toggleOpen: this.handleToggleOpen,
      setToggleButtonVisibility: this.handleToggleButtonVisibilityChange,
    };

    return (
      <context.Provider value={contextValue}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export const SideSheetToggleStateConsumer = context.Consumer;
