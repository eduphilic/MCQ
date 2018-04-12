/**
 * Provide the typing for the global "process.browser" variable which is
 * injected by Webpack.
 *
 * This is used in "packages/theme/CompatibilityFix.tsx" to detect whether or
 * not we are in a browser environment before applying the fix.
 */

declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}
