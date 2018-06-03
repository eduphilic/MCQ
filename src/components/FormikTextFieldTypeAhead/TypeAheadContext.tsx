import Downshift, {
  ControllerStateAndHelpers as DownshiftApi,
} from "downshift";
import React, { Component, createContext } from "react";

import { FormikTextFieldProps } from "../FormikTextField";
import { downshiftToFormikChangeAdapter } from "./downshiftToFormikChangeAdapter";

export interface TypeAheadContextProviderProps<Values extends object>
  extends FormikTextFieldProps<Values> {
  suggestions: string[];
}

interface TypeAheadContextProviderState {
  inputRef: HTMLInputElement | null;
}

interface TypeAheadContextValue {
  formikApi: FormikTextFieldProps<any>["formikApi"];
  downshiftApi: DownshiftApi;
  textFieldProps: Omit<FormikTextFieldProps<any>, "formikApi">;
  suggestions: string[];
  inputRef: HTMLInputElement | null;
  setInputRef: (element: HTMLInputElement | null) => void;
}

const TypeAheadContext = createContext<TypeAheadContextValue | null>(null);

/**
 * Provides TypeAheadContextValue context value to children which provides:
 * * formikApi
 * * downshiftApi
 * * textFieldProps
 * * suggestions: `string[]`
 */
export class TypeAheadContextProvider<Values extends object> extends Component<
  TypeAheadContextProviderProps<Values>,
  TypeAheadContextProviderState
> {
  state: TypeAheadContextProviderState = { inputRef: null };

  private setInputRef = (element: HTMLInputElement | null) =>
    this.setState({ inputRef: element });

  render() {
    const { formikApi, name, children, suggestions, ...rest } = this.props;
    const value = (formikApi.values[name] as any) as string;

    if (typeof value !== "string" && value !== undefined) {
      throw new Error(
        "Only string values are supported in type ahead control.",
      );
    }

    return (
      <Downshift
        defaultInputValue={value}
        selectedItem={value}
        onStateChange={downshiftToFormikChangeAdapter(
          name,
          formikApi.handleChange,
        )}
      >
        {downshiftApi => (
          <div>
            <TypeAheadContext.Provider
              value={{
                downshiftApi,
                formikApi,
                textFieldProps: { ...rest, name },
                suggestions,
                inputRef: this.state.inputRef,
                setInputRef: this.setInputRef,
              }}
            >
              {children}
            </TypeAheadContext.Provider>
          </div>
        )}
      </Downshift>
    );
  }
}

export const TypeAheadContextConsumer = TypeAheadContext.Consumer;

// Opposite of Pick.
// Ref: http://ideasintosoftware.com/typescript-advanced-tricks/

type Diff<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];

/**
 * Remove a field from a type definition.
 */
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
