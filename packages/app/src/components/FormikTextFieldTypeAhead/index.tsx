import React, { Component } from "react";

import { Suggestions } from "./Suggestions";
import { TextField } from "./TextField";
import {
  TypeAheadContextProvider,
  TypeAheadContextProviderProps,
} from "./TypeAheadContext";

// tslint:disable-next-line:no-empty-interface
export interface FormikTextFieldTypeAheadProps<Values extends object>
  extends TypeAheadContextProviderProps<Values> {}

export class FormikTextFieldTypeAhead<Values extends object> extends Component<
  FormikTextFieldTypeAheadProps<Values>
> {
  render() {
    return (
      <TypeAheadContextProvider {...this.props}>
        <TextField />
        <Suggestions />
      </TypeAheadContextProvider>
    );
  }
}
