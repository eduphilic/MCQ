declare namespace NodeJS {
  interface Process {
    /**
     * Whether or not the code is executing in a user's browser. If `false`, the
     * code is executing in the server's backend Node.js process.
     */
    browser: boolean;
  }
}
