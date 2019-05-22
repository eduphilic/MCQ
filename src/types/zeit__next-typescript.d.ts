declare module "@zeit/next-typescript" {
  import { NextConfigFactory, NextCustomizedConfig } from "next";

  function nextTypeScriptPlugin(
    config?: NextCustomizedConfig,
  ): NextConfigFactory;

  export = nextTypeScriptPlugin;
}
