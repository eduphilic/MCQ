declare module "nodemon-webpack-plugin" {
  import { Plugin } from "webpack";

  export interface NodemonWebpackPluginOptions {
    watch: string;
    script: string;
    ext: string;
    nodeArgs?: string[];
  }

  export default class NodemonWebpackPlugin extends Plugin {
    constructor(options: NodemonWebpackPluginOptions);
  }
}
