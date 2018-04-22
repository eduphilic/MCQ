import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Menu from "@material-ui/icons/Menu";
import React, { Component, createContext, ReactNode } from "react";

interface AdminDrawerManagerState {
  icon: ReactNode;
  open: boolean;
  toggleDrawer: () => void;
}

const defaultState: AdminDrawerManagerState = {
  icon: <ChevronLeft />,
  open: true,
  toggleDrawer: () => {
    //
  },
};
const AdminDrawerContext = createContext<AdminDrawerManagerState>(defaultState);

export class AdminDrawerStateProvider extends Component<
  {},
  AdminDrawerManagerState
> {
  toggleDrawer = () => {
    let { open } = this.state;

    open = !open;

    this.setState({
      open,
      // tslint:disable-next-line:object-literal-sort-keys
      icon: open ? <ChevronLeft /> : <Menu />,
    });
  };

  // tslint:disable-next-line:member-ordering
  state: AdminDrawerManagerState = {
    ...defaultState,
    toggleDrawer: this.toggleDrawer,
  };

  render() {
    return (
      <AdminDrawerContext.Provider value={this.state}>
        {this.props.children}
      </AdminDrawerContext.Provider>
    );
  }
}

export const AdminDrawerStateConsumer = AdminDrawerContext.Consumer;
