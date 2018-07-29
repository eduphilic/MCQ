declare module "react-app-rewired" {
  import { Configuration, Rule, RuleSetRule, RuleSetLoader } from "webpack";

  export function injectBabelPlugin(
    plugin: { 0: string; 1?: object },
    config: Configuration,
  ): Configuration;

  export const paths: { scriptVersion: string };

  export function getLoader(
    rules: RuleSetRule[],
    matcher: (args: any[]) => any,
  ): RuleSetRule;
}

declare module "react-app-rewired/config-overrides" {
  import { Configuration } from "webpack";

  export function webpack(
    webpackConfigPath: string,
    env: "production" | "development",
  ): Configuration;
}
