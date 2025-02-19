const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProduction = env === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: ["babel-polyfill", "./src/app.js"],
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "js/bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { sourceMap: !isProduction },
            },
            {
              loader: "sass-loader",
              options: { sourceMap: !isProduction },
            },
          ],
        },
        {
          test: /\.(woff|woff2|ttf|eot|svg)$/,
          type: "asset/resource",
          generator: {
            filename: "css/webfonts/[name][ext]",
          },
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: "css/styles.css" })],
    devtool: isProduction ? "source-map" : "eval-source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      historyApiFallback: true,
      hot: true, // Enables HMR (Hot Module Replacement)
      open: true, // Opens browser automatically
      port: 8080, // Ensures it runs on a standard port
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"], // Ensures Webpack resolves imports properly
    },
  };
};
