/* eslint-disable import/no-commonjs */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

const ENV_CONFIG = {
	__PROD__: JSON.stringify(false),
	__DEVTOOLS__: JSON.stringify(true),
	API_ROOT: JSON.stringify('/api'),
	PA_ROOT: JSON.stringify('https://stage-pa-api.proov.io/predict-cpp'),
	PA_API_KEY: JSON.stringify('HYL7ChZuzcaRQM3azgONM8jWKuP9pwfB8h6rIAXO'),
	INTERCOM_ID: JSON.stringify('bhsjavea'),
	GA_ID: JSON.stringify('UA-152001365-2'),
	STRIPE_PK: JSON.stringify('pk_test_kvzFMdj85yvP62eMJL7ffzYW'),
	FONTS_CSS_KEY: 'https://cloud.typography.com/6035356/7267212/css/fonts.css',
	MIXPANEL_ID: JSON.stringify('554cd4b7d1891b6d43ff3853b39f615c'),
	PUBLIC_PATH: JSON.stringify('/mp/')
};

module.exports = merge(common, {
	mode: 'production',
	devtool: 'none',
	entry: [
		// polyfills
		'@babel/polyfill',
		'core-js/es6/promise',
		'core-js/es6/object',
		'whatwg-fetch',
		// app
		'./src/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'js/[chunkhash:8].b.js',
		chunkFilename: 'js/[chunkhash:8].c.js',
		publicPath: JSON.parse(ENV_CONFIG.PUBLIC_PATH)
	},
	optimization: {
		minimizer: [new TerserPlugin()]
	},
	plugins: [
		new CleanWebpackPlugin(['build']),
		new MiniCssExtractPlugin({
			filename: './assets_proov/style/[name].[hash].css',
			allChunks: true
		}),
		new webpack.DefinePlugin(ENV_CONFIG),
		new HtmlWebpackPlugin({
			template: './index.html',
			FONTS_CSS_KEY: ENV_CONFIG.FONTS_CSS_KEY,
			FAVICON_PATH: `${JSON.parse(ENV_CONFIG.PUBLIC_PATH)}favicon.ico`
		}),
		new webpack.optimize.MinChunkSizePlugin({
			minChunkSize: 30000 // Minimum number of characters
		})
	]
});
