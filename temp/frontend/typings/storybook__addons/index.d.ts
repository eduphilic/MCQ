declare module "@storybook/addons" {
  import { EventEmitter } from "events";
  import { ReactNode } from "react";
  import { RenderFunction } from "@storybook/react";

  export type Context = { kind: string; story: string };

  export type StoryFn = (context: Context) => ReactNode;

  export type WrapperOptions<Options, Parameters> = {
    options: Options;
    parameters: Parameters;
  };

  export type AddonsApi = {
    getChannel: () => EventEmitter;
    register: (addonEventKey: string, cb: ((api: AddonsApi) => any)) => any;
    addPanel: (
      addonPanelKey: string,
      options: {
        title: string;
        render: (state: { active: boolean }) => ReactNode;
      },
    ) => any;
    onStory: (cb: () => any) => any;
  };

  export function makeDecorator<Options, Parameters>(decoratorConfig: {
    name: string;
    parameterName?: string;
    skipIfNoParametersOrOptions?: boolean;
    wrapper: (
      storyFn: StoryFn,
      context: Context,
      options: WrapperOptions<Options, Parameters>,
    ) => ReactNode;
  }): any;

  const addons: AddonsApi;

  export default addons;
}
