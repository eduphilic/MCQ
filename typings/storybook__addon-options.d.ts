import { Options } from "@storybook/addon-options";

declare module "@storybook/addon-options" {
  export interface Options {
    addonPanelInRight?: boolean;
  }
}
