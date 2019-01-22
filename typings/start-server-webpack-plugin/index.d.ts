declare module "start-server-webpack-plugin" {
  import { Plugin } from "webpack";

  export interface StartServerPluginOptions {
    name?: string;
    nodeArgs?: string[];
    args?: string[];
    signal?: boolean | "SIGUSR2";
    keyboard?: boolean;
  }

  export default class StartServerPlugin extends Plugin {
    constructor(options: StartServerPluginOptions);
  }
}
