export interface DashboardCardItemColumn {
  primaryText?: string;
  secondaryText?: string;
  imgUrl?: string;
  switchChecked?: boolean;
  switchOnChange?: (checked: boolean) => any;
}
