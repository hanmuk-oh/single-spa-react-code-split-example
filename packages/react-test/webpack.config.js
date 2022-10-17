const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "kevo",
    projectName: "react-ts",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    watch: true,
    // devMiddleware: {
    //   writeToDisk: true,
    // },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "game.[name].js",
    },
    experiments: {
      topLevelAwait: true,
    },
    watchOptions: {
      // poll: true,
      ignored: /node_modules/
    }
    // modify the webpack config however you'd like to by adding to this object
  });
};
