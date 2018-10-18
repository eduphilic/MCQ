module.exports = {
  plugins: [
    {
      name: "typescript",
      options: {
        useBabel: true,
        useEslint: false,
        forkTsChecker: {
          tsconfig: "./tsconfig.json",
          tslint: "../../tslint.json",
          watch: "./src",
          typeCheck: true,
        },
      },
    },
  ],
};
