// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TypeScriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const componentsEntries = glob.sync('./src/components/**/*.ts').reduce((entries, entry) => {
	const namePath = path.basename(path.dirname(entry));
	const componentName = `components/${namePath}`;
	entries[componentName] = `./${entry}`;
	return entries;
}, {})


const config = {
	// entry: "./src/index.ts",

	entry: {
		// index: './src/index.ts',
		['components/Button']: './src/components/Button/index.ts',
		// ...componentsEntries
	},

	// output: {
	//   path: path.resolve(__dirname, "dist")
	// },
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		// library: 'React Base UI',
		// libraryTarget: 'umd',
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: false,
			})
		],
	},

	devServer: {
		open: true,
		host: "localhost"
	},
	plugins: [
		new MiniCssExtractPlugin(),
		// new TypeScriptDeclarationPlugin({
		// 	out: "index.d.ts",
		// }),

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: "ts-loader",
				exclude: ["/node_modules/"]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"]
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, "css-loader", "postcss-loader"]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset"
			}

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", "..."]
	}
};

module.exports = () => {
	if (isProduction) {
		config.mode = "production";
	} else {
		config.mode = "development";
	}
	return config;
};
