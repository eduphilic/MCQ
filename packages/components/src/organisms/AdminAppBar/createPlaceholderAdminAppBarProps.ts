import { AdminAppBarProps } from ".";

export const createPlaceholderAdminAppBarProps = (): AdminAppBarProps => ({
  titleText: "Admin Dashboard",

  // tslint:disable-next-line:no-empty
  onLogoutButtonClick: () => {},
});
