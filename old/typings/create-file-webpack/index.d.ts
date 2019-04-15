declare module "create-file-webpack" {
  import { Plugin } from "webpack";

  export interface CreateFileWebpackPluginOptions {
    path: string;
    fileName: string;
    content: string;
  }

  export default class CreateFileWebpackPlugin extends Plugin {
    constructor(options: CreateFileWebpackPluginOptions);
  }
}
