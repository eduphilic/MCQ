import * as sc from "styled-components";

declare module "styled-components" {
  // export type BaseGlobalStyleFnInterface

  export interface ThemedStyledComponentsModule<T> {
    createGlobalStyle: ThemedStyledFunction<{}, T>;
  }

  export const createGlobalStyle: any;
  // export const createGlobalStyle: ThemedStyledFunction<{}, DefaultTheme>;
}
