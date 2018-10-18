const path = require("path");
const rimraf = require("rimraf");

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
      config.entry = path.resolve(__dirname, "./src/server");
      config.output.filename = "[name].js";
      config.output.path = path.resolve(__dirname, "./build-server");
      config.output.libraryTarget = "commonjs2";
      config.plugins.push(new CustomPostBuildPlugin());

      config.plugins = config.plugins.filter(
        c => !/StartServerPlugin/.test(c.constructor),
      );
    }

    return config;
  },
};

class CustomPostBuildPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap("CustomPostBuildPlugin", () => {
      rimraf.sync(path.resolve(__dirname, "build-server/static"));
    });
  }
}
