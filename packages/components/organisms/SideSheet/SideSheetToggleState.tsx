import React, { Component, createContext } from "react";

export interface SideSheetToggleStateApi {
  /**
   * Whether the side sheet is open (toggled) on mobile.
   */
  open: boolean;

  /**
   * Toggles the open state of the side sheet on mobile. Should be called by way
   * of a button.
   */
  toggleOpen: () => void;
}

const context = createContext<SideSheetToggleStateApi>({
  open: false,
  // tslint:disable-next-line:no-empty
  toggleOpen: () => {},
});

type SideSheetToggleStateProviderState = Pick<SideSheetToggleStateApi, "open">;

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
  };

  handleToggleOpen = () => this.setState({ open: !this.state.open });

  render() {
    const contextValue = {
      open: this.state.open,
      toggleOpen: this.handleToggleOpen,
    };

    return (
      <context.Provider value={contextValue}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export const SideSheetToggleStateConsumer = context.Consumer;
