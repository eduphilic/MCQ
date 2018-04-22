import { AdminAppBarProps } from ".";
import { createToolbarAvatarPlaceholderProps } from "../../molecules/ToolbarAvatar/createToolbarAvatarPlaceholderProps";

export const createPlaceholderAdminAppBarProps = (): AdminAppBarProps => ({
  onLogoutClick: () => {
    //
  },
  toolbarAvatarProps: createToolbarAvatarPlaceholderProps(),
});
