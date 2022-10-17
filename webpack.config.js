const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "kevo";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    target: "web",
    devServer: {
      hot: false,
      compress: true,
      liveReload: true,
      // watchFiles: ["dist/apps/**/*"],
      historyApiFallback: true,
      static: [
        {
          directory: path.join(__dirname, "packages"),
        },
      ],
      devMiddleware: {
        writeToDisk: true,
      },
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      // publicPath: "/dist/",
    },
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
      new CopyPlugin({
        patterns: [
          { from: "packages/react-test/dist", to: "packages/react-test" },
        ],
      }),
    ],
  });
};
