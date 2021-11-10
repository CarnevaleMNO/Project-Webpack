const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //production
  entry: {
    main: path.resolve(__dirname, "src/js/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000, //default 8080
    open: true,
    hot: true,
    watchFiles: [path.resolve(__dirname, "src")],
  },
  //loaders
  module: {
    rules: [
      //css
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      //images
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
      //js for babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: "asset/resource" },
    ],
  },

  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Project: Webpack",
      filename: "index.html",
      template: path.resolve(__dirname, "src/assets/temp.html"),
    }),
  ],
};
