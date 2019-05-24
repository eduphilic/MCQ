declare module "@weco/next-plugin-transpile-modules" {
  import { NextConfig } from "next-config";

  function nextTranspileModulesPlugin(nextConfig: NextConfig): NextConfig;

  export = nextTranspileModulesPlugin;
}

declare module "next-config" {
  export interface NextConfig {
    transpileModules?: string[];
  }
}
