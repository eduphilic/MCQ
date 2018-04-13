declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.gif" {
  const value: any;
  export = value;
}

declare module "*.jpg" {
  const value: any;
  export = value;
}

declare module "*.json" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  import * as React from "react";

  const value: string;
  const ReactComponent: React.ComponentClass;

  export default value;
  export { ReactComponent };
}
