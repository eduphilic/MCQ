import { AdminPanelUsersSummaryProps } from ".";
import { createPlaceholderFilterButtonProps } from "../../molecules/FilterButton/createPlaceholderFilterButtonProps";

export const createPlaceholderAdminPanelUsersSummaryProps = (): AdminPanelUsersSummaryProps => ({
  activeUsers: 20023,
  filterButtonProps: createPlaceholderFilterButtonProps(),
  registrationsToday: 565,
  totalUsers: 25678,
});
