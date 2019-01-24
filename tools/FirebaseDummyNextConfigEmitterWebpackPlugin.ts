import { Plugin, Compiler } from "webpack";

/**
 * Emits an empty "next.config.js".
 *
 * This is needed because Next.js searches upward from the current working
 * directory in search of this config file. It uses the config file location to
 * calculate the location of the ".next" directory.
 */
export class FirebaseDummyNextConfigEmitterWebpackPlugin implements Plugin {
  apply(compiler: Compiler) {
    compiler.hooks.emit.tap(
      "FirebaseDummyNextConfigEmitterWebpackPlugin",
      compilation => {
        const dummyNextConfig = "module.exports = {};\n";

        // eslint-disable-next-line no-param-reassign
        compilation.assets["next.config.js"] = {
          source: () => dummyNextConfig,
          size: () => dummyNextConfig.length,
        };
      },
    );
  }
}
