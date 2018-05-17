import { TextFieldProps } from "@material-ui/core/TextField";

import { DashboardFormDialogFieldConfig } from "./DashboardFormDialogFieldConfig";

type PickProps =
  | "type"
  | "name"
  | "required"
  | "autoFocus"
  | "value"
  | "onChange"
  | "onBlur"
  | "label"
  | "placeholder"
  | "error"
  | "fullWidth"
  | "margin";

export interface DashboardFormDialogFormInputCommonProps
  extends Pick<TextFieldProps, PickProps>,
    Pick<DashboardFormDialogFieldConfig, "suggestions"> {}
