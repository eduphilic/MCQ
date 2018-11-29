/// <reference types="node" />

declare namespace NodeJS {
  interface Process {
    /**
     * Whether or not code is executing in the context of a browser.
     * This is a variable provided by the Next.js environment.
     */
    browser: boolean;
  }
}
