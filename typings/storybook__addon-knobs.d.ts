import * as addonKnobs from "@storybook/addon-knobs";

// Missing type definition.
declare module "@storybook/addon-knobs" {
  export const selectV2: typeof addonKnobs.select;
}
