import { CSSProp } from "styled-components";

// Add theme to "css" prop.
// https://www.styled-components.com/docs/api
declare module "react" {
  interface Attributes {
    css?: CSSProp<import("@join-uniform/theme").Theme>;
  }
}
