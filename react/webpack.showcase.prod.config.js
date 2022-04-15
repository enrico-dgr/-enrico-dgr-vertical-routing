var path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  target: "web",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./showcase/index.html",
      inject: false,
    }),
  ],
  entry: {
    index: path.resolve(__dirname, "./showcase/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "./showcase/build"),
    filename: "[name].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    fallback: {
      path: require.resolve("./node_modules/path-browserify"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
