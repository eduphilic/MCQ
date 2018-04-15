import React, { SFC } from "react";
import { TextFieldBase, TextFieldBaseProps } from "../../atoms/TextFieldBase";
import { TextFieldTooltip } from "../../atoms/TextFieldTooltip";

export type TextFieldProps = TextFieldBaseProps;

export const TextField: SFC<TextFieldProps> = props => {
  const { error, label, ...rest } = props;

  const open = Boolean(error);
  const title = label || "";

  return (
    <TextFieldTooltip open={open} title={title}>
      <TextFieldBase {...rest as any} />
    </TextFieldTooltip>
  );
};
