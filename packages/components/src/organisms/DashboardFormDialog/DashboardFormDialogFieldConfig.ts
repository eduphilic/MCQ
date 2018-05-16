export interface DashboardFormDialogFieldConfig {
  /**
   * Field type, used to render the proper input component for the field.
   */
  inputType: "text";

  /**
   * Label for the input.
   */
  inputLabel: string;

  /**
   * Placeholder text for input.
   */
  placeholder?: string;
}
