module.exports = {
  projects: [
    {
      preset: "ts-jest",
      rootDir: "src",
      displayName: "client",
      roots: ["<rootDir>/client"],
    },
    {
      preset: "ts-jest",
      rootDir: "src",
      displayName: "server",
      testEnvironment: "node",
      roots: ["<rootDir>/server"],
      setupFiles: ["<rootDir>/setupTests.ts"],
    },
  ],
};
