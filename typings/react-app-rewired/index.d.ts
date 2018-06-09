declare module "react-app-rewired" {
  import { Configuration } from "webpack";

  export function injectBabelPlugin(
    plugin: { 0: string; 1?: object },
    config: Configuration,
  ): Configuration;
}
