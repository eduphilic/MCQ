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
  selected: boolean[];
}

interface DashboardCardModeContextApi {
  actions: {
    enterEditMode: () => void;
    enterDeletionMode: () => void;
    exitMode: () => void;
    clickItem: (key: string) => void;
  };
  state: DashboardCardModeContextState;
}

const initialState: DashboardCardModeContextState = {
  mode: "display",
  selected: [],
};

const uninitializedAction = () => {
  throw new Error("Uninitialized action was called.");
};

const context = createContext<DashboardCardModeContextApi>({
  actions: {
    enterEditMode: uninitializedAction,
    enterDeletionMode: uninitializedAction,
    exitMode: uninitializedAction,
    clickItem: uninitializedAction,
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

    this.state = {
      ...initialState,
      ...DashboardCardModeProvider.getResetSelectionStateFromProps(props),
    };
  }

  /**
   * Returns the card to display mode and sets all items to unselected.
   */
  static getResetSelectionStateFromProps(
    props: DashboardCardModeContextProps,
  ): Partial<DashboardCardModeContextState> {
    return {
      mode: "display",
      selected: props.itemKeys.map(() => false),
    };
  }

  /**
   * If the number of items provided to this component changes, recalculate the
   * "selected" state property to prevent range errors.
   */
  static getDerivedStateFromProps(
    nextProps: DashboardCardModeContextProps,
    prevState: DashboardCardModeContextState,
  ): Partial<DashboardCardModeContextState> | null {
    if (nextProps.itemKeys.length !== prevState.selected.length) {
      return DashboardCardModeProvider.getResetSelectionStateFromProps(
        nextProps,
      );
    }

    return null;
  }

  /**
   * If any item key has changed, reset the display state (exit back to display
   * mode) for safety. This relies on getDerivedStateFromProps correctly
   * resizing the "selected" state array.
   */
  componentDidUpdate(prevProps: DashboardCardModeContextProps) {
    for (let i = 0; i < prevProps.itemKeys.length; i += 1) {
      if (prevProps.itemKeys[i] !== this.props.itemKeys[i]) {
        this.handleExitMode();
        return;
      }
    }
  }

  handleEnterEditMode = () => this.setState({ mode: "edit" });

  handleEnterDeletionMode = () => this.setState({ mode: "deletion" });

  handleExitMode = () =>
    this.setState(
      // FIXME: Not sure what's going with this type definition problem.
      // @ts-ignore
      DashboardCardModeProvider.getResetSelectionStateFromProps(this.props),
    );

  handleItemClick = (key: string) => {
    const itemIndex = this.props.itemKeys.indexOf(key);
    if (itemIndex < 0) return;

    if (this.state.mode === "deletion") {
      const { selected } = this.state;

      this.setState({
        selected: [
          ...selected.slice(0, itemIndex),
          !selected[itemIndex],
          ...selected.slice(itemIndex + 1),
        ],
      });
    }

    // TODO: Dispatch event for click in edit mode.
  };

  render() {
    const { children } = this.props;
    const api: DashboardCardModeContextApi = {
      actions: {
        enterEditMode: this.handleEnterEditMode,
        enterDeletionMode: this.handleEnterDeletionMode,
        exitMode: this.handleExitMode,
        clickItem: this.handleItemClick,
      },
      state: this.state,
    };

    return <context.Provider value={api}>{children}</context.Provider>;
  }
}

export const DashboardCardModeConsumer = context.Consumer;
