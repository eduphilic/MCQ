import { WrapStoryProps } from "@storybook/addon-info";
import { RenderFunction } from "@storybook/react";
import { ReactElement } from "react";

// Add missing function form where options are optional.
declare module "@storybook/addon-info" {
  export function withInfo(): (
    storyFn: RenderFunction,
  ) => () => ReactElement<WrapStoryProps>;
}
