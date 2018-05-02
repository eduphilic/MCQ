import { AdminPanelUsersSummaryProps } from ".";
import { createPlaceholderFilterButtonProps } from "../../molecules/FilterButton/createPlaceholderFilterButtonProps";

export const createPlaceholderAdminPanelUsersSummaryProps = (): AdminPanelUsersSummaryProps => ({
  activeUsers: 20023,
  filterButtonProps: createPlaceholderFilterButtonProps(),
  registrationsCount: 565,
  registrationsCountL10Key: "adminPanelUsersSummaryRegistrationsToday",
  totalUsers: 25678,
});
