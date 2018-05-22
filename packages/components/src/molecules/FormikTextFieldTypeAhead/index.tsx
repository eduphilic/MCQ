import React, { Component } from "react";

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
        <div>Placeholder</div>
      </TypeAheadContextProvider>
    );
  }
}
