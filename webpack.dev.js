/* eslint-disable import/no-commonjs */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ENV_CONFIG = {
	__PROD__: JSON.stringify(false),
	__DEVTOOLS__: JSON.stringify(true),
	API_ROOT: JSON.stringify('/api'),
	PA_ROOT: JSON.stringify('prediction'),
	PA_API_KEY: JSON.stringify('u9857SQWqu2Qt9MICg8BrNtidDTgz9a5hH8e9x9h'),
	INTERCOM_ID: JSON.stringify('bhsjavea'),
	GA_ID: JSON.stringify('UA-152001365-2'),
	STRIPE_PK: JSON.stringify('pk_test_kvzFMdj85yvP62eMJL7ffzYW'),
	FONTS_CSS_KEY: 'https://cloud.typography.com/6035356/7867212/css/fonts.css',
	MIXPANEL_ID: JSON.stringify('554cd4b7d1891b6d43ff3853b39f615c'),
	PUBLIC_PATH: JSON.stringify(''),
};

module.exports = merge(common, {
	devtool: 'eval-source-map',
	mode: 'development',
	entry: [
		// polyfills
		'@babel/polyfill',
		'core-js/es6/promise',
		'core-js/es6/object',
		'whatwg-fetch',
		// hmr
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
		// app
		'./src/index.js'
	],
	output: {
		path: __dirname,
		filename: 'js/[name].bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProgressPlugin({
			activeModules: false
		  }),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin(ENV_CONFIG),
		new MiniCssExtractPlugin({}),
		new HtmlWebpackPlugin({
			template: './index.html',
			'FONTS_CSS_KEY': ENV_CONFIG.FONTS_CSS_KEY,
			'FAVICON_PATH': 'favicon.ico'
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'node_modules/@proov/amcharts3/amcharts/images/lens.svg'),
				to: path.resolve(__dirname, 'assets_proov/images')
			},
			{
				from: path.resolve(__dirname, 'node_modules/@proov/amcharts3/amcharts/images/dragIconRoundBig.svg'),
				to: path.resolve(__dirname, 'assets_proov/images')
			}])
	]
});
