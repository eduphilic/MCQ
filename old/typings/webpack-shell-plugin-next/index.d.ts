declare module "webpack-shell-plugin-next" {
  import { Plugin } from "webpack";

  export interface ShellPluginScript {
    scripts: string[];
    blocking?: boolean;
    parallel?: boolean;
  }

  export interface ShellPluginOptions {
    onBuildStart?: ShellPluginScript;
    onBuildEnd?: ShellPluginScript;
    onBuildExit?: ShellPluginScript;
    dev?: boolean;
    safe?: boolean;
  }

  class ShellPlugin extends Plugin {
    constructor(options: ShellPluginOptions);
  }

  export default ShellPlugin;
}
