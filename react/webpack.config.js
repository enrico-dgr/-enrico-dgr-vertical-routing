var path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	target: "web",
	devtool: "inline-source-map",
	devServer: {
		static: {
			directory: path.join(__dirname, "./build"),
		},
		compress: true,
		hot: true,
		port: 9000,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/showcase/index.html",
			inject: false,
		}),
	],
	entry: {
		index: path.resolve(__dirname, "./src/showcase/index.tsx"),
	},
	output: {
		path: path.resolve(__dirname, "./build"),
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
