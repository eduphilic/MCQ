import {
  AdminDashboardTemplate,
  AdminDashboardTemplateProps,
} from "components/templates/AdminDashboardTemplate";
import React, { SFC } from "react";
import { connect } from "react-redux";
import { actions } from "store";

interface AdminDashboardTemplateContainerProps {
  onLogoutButtonClick: AdminDashboardTemplateProps["adminAppBarProps"]["onLogoutButtonClick"];
}

const AdminDashboardTemplateContainer: SFC<
  AdminDashboardTemplateContainerProps
> = props => {
  const { children, onLogoutButtonClick } = props;

  const adminAppBarProps: AdminDashboardTemplateProps["adminAppBarProps"] = {
    onLogoutButtonClick,
  };

  return (
    <AdminDashboardTemplate adminAppBarProps={adminAppBarProps}>
      {children}
    </AdminDashboardTemplate>
  );
};

const mapDispatchToProps: AdminDashboardTemplateContainerProps = {
  onLogoutButtonClick: actions.app.logout,
};

const ConnectedAdminDashboardTemplateContainer = connect(
  null,
  mapDispatchToProps,
)(AdminDashboardTemplateContainer);

export {
  ConnectedAdminDashboardTemplateContainer as AdminDashboardTemplateContainer,
};
