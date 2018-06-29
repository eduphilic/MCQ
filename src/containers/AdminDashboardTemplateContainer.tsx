import {
  AdminDashboardTemplate,
  AdminDashboardTemplateProps,
} from "components/AdminDashboardTemplate";
import React, { SFC } from "react";

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

// tslint:disable-next-line:no-empty-interface
interface AdminDashboardTemplateContainerProps
  extends AdminDashboardTemplateContainerOwnProps {}

export const AdminDashboardTemplateContainer: SFC<
  AdminDashboardTemplateContainerProps
> = props => {
  const { children, actionButtonElements, ...rest } = props;

  const adminAppBarProps: AdminDashboardTemplateProps["dashboardAppBarProps"] = {
    // tslint:disable-next-line:no-empty
    onLogoutButtonClick: () => {},
    actionButtonElements,
  };

  return (
    <AdminDashboardTemplate dashboardAppBarProps={adminAppBarProps} {...rest}>
      {children}
    </AdminDashboardTemplate>
  );
};
