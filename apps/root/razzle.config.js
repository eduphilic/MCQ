const path = require("path");

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
  modify(config, { target, dev }) {
    if (target === "node") {
      console.log(config);

      config.output.filename = "index.js";
      config.output.path = path.resolve(__dirname, "../../dist/functions");

      // process.exit(0);
    }

    return config;
  },
};
