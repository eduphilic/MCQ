const path = require("path");
const { findMonorepo } = require("react-dev-utils/workspaceUtils");

module.exports = (baseConfig, env, defaultConfig) => {
  const config = defaultConfig;

  // Remove Babel 6 configuration.
  config.module.rules = config.module.rules.filter(
    r => !(r.loader && r.loader.includes("babel-loader")),
  );

  // Add Babel 7 configuration.
  const monorepoPackages = findMonorepo(path.resolve(__dirname, "..")).pkgs;
  config.module.rules.unshift({
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    include: [path.resolve(__dirname, ".."), ...monorepoPackages],
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          ...createBabelConfig(env),
        },
      },
      env === "PRODUCTION"
        ? {
            loader: require.resolve("react-docgen-typescript-loader"),
            options: {
              includes: ["components.*\\.tsx$"],
              excludes: ["stories\\.tsx$"],
            },
          }
        : false,
    ].filter(r => Boolean(r)),
  });

  // Add TypeScript definitions.
  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};

// Based on Babel 6 config for Storybook, just converted to Babel 7.
// https://github.com/storybooks/storybook/blob/master/app/react/src/server/config/babel.js
//
// Also added:
// * babel-plugin-named-asset-import for support for SVGs as React Components
//   per Create React App 2.
// * @babel/preset-typescript for TypeScript support.
function createBabelConfig(env) {
  return {
    babelrc: false,
    presets: [
      [
        require.resolve("@babel/preset-env"),
        {
          targets: {
            browsers: ["last 2 versions", "safari >= 7"],
          },
          modules: process.env.NODE_ENV === "test" ? "commonjs" : false,
        },
      ],
      [
        require.resolve("@babel/preset-stage-0"),
        {
          decoratorsLegacy: true,
        },
      ],
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-typescript"),
      env === "PRODUCTION" ? require.resolve("babel-preset-minify") : false,
    ].filter(p => Boolean(p)),

    plugins: [
      [
        require.resolve("babel-plugin-named-asset-import"),
        {
          loaderMap: {
            svg: {
              ReactComponent: "svgr/webpack![path]",
            },
          },
        },
      ],
      require.resolve("@babel/plugin-transform-regenerator"),
      [
        require.resolve("@babel/plugin-transform-runtime"),
        {
          helpers: true,
          polyfill: true,
          regenerator: true,
        },
      ],
    ],
  };
}
