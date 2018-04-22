import { ComponentClass, SFC, ReactNode } from "react";

declare module "react" {
  export type Provider<T> = ComponentClass<{
    value: T;
    children?: ReactNode;
  }>;

  export type Consumer<T> = ComponentClass<{
    children: (value: T) => ReactNode;
  }>;

  export interface Context<T> {
    Provider: Provider<T>;
    Consumer: Consumer<T>;
  }

  export function createContext<T>(defaultValue: T): Context<T>;
}
