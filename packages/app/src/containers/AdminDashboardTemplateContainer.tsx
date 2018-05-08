import {
  AdminDashboardTemplate,
  AdminDashboardTemplateProps,
} from "components/templates/AdminDashboardTemplate";
import React, { SFC } from "react";
import { connect } from "react-redux";
import { actions, RootState } from "store";

interface AdminDashboardTemplateContainerProps {
  titleText: AdminDashboardTemplateProps["adminAppBarProps"]["titleText"];
  onLogoutButtonClick: AdminDashboardTemplateProps["adminAppBarProps"]["onLogoutButtonClick"];
  actionButtonElements?: AdminDashboardTemplateProps["adminAppBarProps"]["actionButtonElements"];
}

const AdminDashboardTemplateContainer: SFC<
  AdminDashboardTemplateContainerProps
> = props => {
  const {
    children,
    titleText,
    onLogoutButtonClick,
    actionButtonElements,
  } = props;

  const adminAppBarProps: AdminDashboardTemplateProps["adminAppBarProps"] = {
    titleText,
    onLogoutButtonClick,
    actionButtonElements,
  };

  return (
    <AdminDashboardTemplate adminAppBarProps={adminAppBarProps}>
      {children}
    </AdminDashboardTemplate>
  );
};

const mapStateToProps = (
  _state: RootState,
  ownProps: Pick<
    AdminDashboardTemplateContainerProps,
    "titleText" | "actionButtonElements"
  >,
) => ({
  titleText: ownProps.titleText,
});

const mapDispatchToProps: Partial<AdminDashboardTemplateContainerProps> = {
  onLogoutButtonClick: actions.app.logout,
};

const ConnectedAdminDashboardTemplateContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminDashboardTemplateContainer);

export {
  ConnectedAdminDashboardTemplateContainer as AdminDashboardTemplateContainer,
};
