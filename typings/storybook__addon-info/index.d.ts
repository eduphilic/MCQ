import { Parameters } from "@storybook/react";
import {
  WrapStoryProps,
  Options,
  OptionsCorrected,
} from "@storybook/addon-info";
import { RenderFunction } from "@storybook/react";
import { ReactElement, ComponentType } from "react";

// Add missing function form where options are optional.
declare module "@storybook/addon-info" {
  export function withInfo(): (
    storyFn: RenderFunction,
  ) => () => ReactElement<WrapStoryProps>;

  // Use corrected options interface, see below.
  export function withInfo(
    options: OptionsCorrected,
  ): (
    storyFn: RenderFunction,
  ) => (context?: object) => ReactElement<WrapStoryProps>;

  // The props "propTables" and "propTablesExclude" are incorrectly defined.
  // Here we define a new Options interface with corrected definitions.
  export interface OptionsCorrected
    extends Omit<Options, "propTables" | "propTablesExclude"> {
    propTables?: ComponentType<any>[];
    propTablesExclude?: ComponentType<any>[];
  }
}

declare module "@storybook/react" {
  export interface Parameters {
    info?: OptionsCorrected;
  }
}
