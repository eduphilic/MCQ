import {
  AdminDashboardTemplate,
  AdminDashboardTemplateProps,
} from "components/AdminDashboardTemplate";
import React, { SFC } from "react";
import { connect } from "react-redux";
import { actions, RootState } from "store";

interface AdminDashboardTemplateContainerOwnProps
  extends Pick<
      AdminDashboardTemplateProps,
      | "sideSheetTitle"
      | "sideSheetContents"
      | "sideSheetIconElement"
      | "sideSheetIconTooltipTitle"
    > {
  actionButtonElements?: AdminDashboardTemplateProps["dashboardAppBarProps"]["actionButtonElements"];
}

interface AdminDashboardTemplateContainerProps
  extends AdminDashboardTemplateContainerOwnProps {
  onLogoutButtonClick: AdminDashboardTemplateProps["dashboardAppBarProps"]["onLogoutButtonClick"];
}

const AdminDashboardTemplateContainer: SFC<
  AdminDashboardTemplateContainerProps
> = props => {
  const {
    children,
    onLogoutButtonClick,
    actionButtonElements,
    ...rest
  } = props;

  const adminAppBarProps: AdminDashboardTemplateProps["dashboardAppBarProps"] = {
    onLogoutButtonClick,
    actionButtonElements,
  };

  return (
    <AdminDashboardTemplate dashboardAppBarProps={adminAppBarProps} {...rest}>
      {children}
    </AdminDashboardTemplate>
  );
};

const mapStateToProps = (
  _state: RootState,
  ownProps: AdminDashboardTemplateContainerOwnProps,
) => ownProps;

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
