import * as addonKnobs from "@storybook/addon-knobs";

// Missing type definition.
declare module "@storybook/addon-knobs" {
  const radios: <T extends { [key: string]: any }, K extends keyof T>(
    name: string,
    options: T,
    defaultValue: K,
  ) => T[K];
}
