/* eslint-disable import/no-commonjs */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

const ENV_CONFIG = {
	__PROD__: JSON.stringify(true),
	__DEVTOOLS__: JSON.stringify(false),
	API_ROOT: JSON.stringify('/api'),
	PA_ROOT: JSON.stringify('https://prod-pa-api.proov.io/predict-cpp'),
	PA_API_KEY: JSON.stringify('pHwn79lW267aDMjE4KkJo7YxL9qG0RIE348YPQjJ'),
	INTERCOM_ID: JSON.stringify('jlec04x3'),
	GA_ID: JSON.stringify('UA-152001365-1'),
	STRIPE_PK: JSON.stringify('pk_live_eKtIazL2QKi4yBeAn2e7IrQZ'),
	FONTS_CSS_KEY: 'https://cloud.typography.com/6035356/7785572/css/fonts.css',
	MIXPANEL_ID: JSON.stringify('26f5ed9e5011b71629bf9a2b565e88d5'),
	PUBLIC_PATH: JSON.stringify('/mp/'),
	'process.env.NODE_ENV': JSON.stringify('production')
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
			'FONTS_CSS_KEY': ENV_CONFIG.FONTS_CSS_KEY,
			'FAVICON_PATH': `${JSON.parse(ENV_CONFIG.PUBLIC_PATH)}favicon.ico`
		}),
		new webpack.optimize.MinChunkSizePlugin({
			minChunkSize: 30000 // Minimum number of characters
		})
	]
});
