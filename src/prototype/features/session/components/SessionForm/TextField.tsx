import React, { SFC } from "react";

import { TextFieldBase, TextFieldBaseProps } from "./TextFieldBase";
import { TextFieldTooltip } from "./TextFieldTooltip";

export type TextFieldProps = TextFieldBaseProps;

/** Flat text field input supporting a custom validation error tooltip. */
export const TextField: SFC<TextFieldProps> = props => {
  const { error, label, ...rest } = props;

  const open = Boolean(error);
  const title = label || "";

  return (
    <TextFieldTooltip open={open} title={title}>
      <TextFieldBase {...(rest as any)} />
    </TextFieldTooltip>
  );
};
