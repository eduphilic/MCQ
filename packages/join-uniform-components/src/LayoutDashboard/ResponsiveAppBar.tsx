import { styled } from "@join-uniform/theme";
import { AppBar } from "../AppBar";
import { drawerWidth } from "../AppDrawer";

export const ResponsiveAppBar = styled(AppBar)`
  position: fixed;

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: calc(100% - ${drawerWidth}px);
    margin-left: ${drawerWidth}px;
  }
`;
