import React, { Component, createContext } from "react";

export interface DashboardCardModeContextProps {
  /**
   * Children which later can use the DashboardCardModeConsumer component to
   * access the passed api.
   */
  children: Component<any>["props"]["children"];

  /**
   * String keys for use tracking the contents of the data list. When an item is
   * removed or added, the component's internal state will update to reflect.
   */
  itemKeys: string[];
}

interface DashboardCardModeContextState {
  mode: "display" | "edit" | "deletion";
}

interface DashboardCardModeContextApi {
  actions: {
    enterEditMode: () => void;
    enterDeletionMode: () => void;
    exitMode: () => void;
  };
  state: DashboardCardModeContextState;
}

const initialState: DashboardCardModeContextState = { mode: "display" };
const uninitializedAction = () => {
  throw new Error("Uninitialized action was called.");
};

const context = createContext<DashboardCardModeContextApi>({
  actions: {
    enterEditMode: uninitializedAction,
    enterDeletionMode: uninitializedAction,
    exitMode: uninitializedAction,
  },
  state: initialState,
});

/**
 * Wraps the functionality of the DashboardCard which deals with entering the
 * edit and deletion modes. It tracks the checkbox states for rows.
 */
export class DashboardCardModeProvider extends Component<
  DashboardCardModeContextProps,
  DashboardCardModeContextState
> {
  constructor(props: DashboardCardModeContextProps) {
    super(props);

    this.state = initialState;
  }

  handleEnterEditMode = () => this.setState({ mode: "edit" });

  handleEnterDeletionMode = () => this.setState({ mode: "deletion" });

  // TODO: Clear selected items.
  handleExitMode = () => this.setState({ mode: "display" });

  render() {
    const { children } = this.props;
    const api: DashboardCardModeContextApi = {
      actions: {
        enterEditMode: this.handleEnterEditMode,
        enterDeletionMode: this.handleEnterDeletionMode,
        exitMode: this.handleExitMode,
      },
      state: this.state,
    };

    return <context.Provider value={api}>{children}</context.Provider>;
  }
}

export const DashboardCardModeConsumer = context.Consumer;
