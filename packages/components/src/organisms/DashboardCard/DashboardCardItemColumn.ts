import { ReactNode } from "react";
export interface DashboardCardItemColumn {
  // Single line / Dual line / Button
  primaryText?: string;
  secondaryText?: string;

  // Image
  imgUrl?: string;

  // Switch
  switchChecked?: boolean;
  switchOnChange?: (checked: boolean) => any;
  switchTooltipTitle?: string;

  // Button
  buttonIconNode?: ReactNode;
  buttonTooltipTitle?: string;
}
