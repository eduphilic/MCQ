import {
  AdminDashboardTemplate,
  AdminDashboardTemplateProps,
} from "components/templates/AdminDashboardTemplate";
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
  actionButtonElements?: AdminDashboardTemplateProps["adminAppBarProps"]["actionButtonElements"];
}

interface AdminDashboardTemplateContainerProps
  extends AdminDashboardTemplateContainerOwnProps {
  onLogoutButtonClick: AdminDashboardTemplateProps["adminAppBarProps"]["onLogoutButtonClick"];
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

  const adminAppBarProps: AdminDashboardTemplateProps["adminAppBarProps"] = {
    onLogoutButtonClick,
    actionButtonElements,
  };

  return (
    <AdminDashboardTemplate adminAppBarProps={adminAppBarProps} {...rest}>
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
