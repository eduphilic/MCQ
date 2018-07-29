import { Story, Renderable } from "@storybook/react";

declare module "@storybook/react" {
  export interface Parameters {}

  export type RenderFunctionWithParameters = (
    props: {
      kind: string;
      story: string;
      parameters: Parameters;
    },
  ) => Renderable | Renderable[] | ((props: any) => Renderable);

  export interface Story {
    add<Props = object>(
      storyName: string,
      callback: RenderFunctionWithParameters,
    ): this;
    addParameters(parameters: Parameters): this;
  }
}
