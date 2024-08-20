// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const componentsEntries = glob.sync('./src/components/**/index.ts').reduce((entries, entry) => {
	const namePath = path.basename(path.dirname(entry));
	let componentName = ''
	if(entry==='src/components/index.ts') componentName = 'components/index';
	else componentName = `components/${namePath}/index`;
	entries[componentName] = `./${entry}`;
	return entries;
}, {})


const config = {
	entry: {
		index: "./src/index.ts",
		...componentsEntries,
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		library: 'react-base-ui',
		libraryTarget: 'umd',
		umdNamedDefine: true,

	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: false,
			})
		],
	},
	externals: {
		react: 'react',
		'react-dom': 'react-dom',
	},

	devServer: {
		open: true,
		host: "localhost"
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: 'react-base-ui.min.css',}),
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
		extensions: [".tsx", ".ts", ".jsx", ".js"],
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
			
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
