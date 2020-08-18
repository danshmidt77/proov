/* eslint-disable import/no-commonjs */
const path = require('path');
//const _ = require('lodash');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	target: 'web',
	stats: {
		colors: true,
		env: true,
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		alias: {
			'assets': path.join(__dirname, 'src', 'assets'),
			'style': path.join(__dirname, 'src', 'assets', 'css'),
			// Prevents duplicate with `chart.js`
			'moment': path.join(__dirname, 'node_modules', 'moment'),
			// Prevents duplicate with `react-grecaptcha`
			'lodash.omit': 'lodash/omit'
		}
	},
	module: {
		rules: [
			// JavaScript
			{
				test: /\.js$/i,
				include: path.resolve(__dirname, 'src'),
				use: {
					loader: 'babel-loader',
					options: {
						'plugins': ['react-hot-loader/babel']
					}
				}
			},
			// Images
			{
				test: /\.(svg|png|gif|jpg|ico)$/,
				// will ignore all reference outside of 'srce/assets'
				include: path.resolve(__dirname, 'src', 'assets'),
				use: {
					loader: 'file-loader',
					options: {
						context: 'src/assets',
						name: 'assets_proov/[path][name].[ext]'
					}
				}
			},
			// CSS (global)
			{
				test: /\.s?css$/,
				include: path.resolve(__dirname, 'src', 'assets', 'css'),
				// fallback: 'style-loader',
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					'postcss-loader',
					'sass-loader'
				],
				sideEffects: true,
			},
			// CSS (modules)
			{
				test: /\.s?css$/,
				exclude: /(node_modules|src[\\/]assets[\\/]css)/,
				use: [
					'style-loader?singleton',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							camelCase: true,
							importLoaders: 2,
							localIdentName: '[name]__[local]__[hash:base64:5]'
						}
					},
					'postcss-loader',
					'sass-loader'
				],
			},
			// Load amChart images in amCahrtBase
			{
				test: /\.svg$/,
				include: path.resolve(__dirname, 'node_modules/@proov/amcharts3'),
				use: {
					loader: 'file-loader',
					options: {
						name: 'assets_proov/images/[name].[ext]'
					}
				}
			},
			/* Vendors style
				@AmCharts - export plugin css
				@HTML editor css */
			{
				test: /(export.css|react-draft-wysiwyg.css|_datepicker.css)$/,
				include: path.resolve(__dirname, 'node_modules'),
				use: ['style-loader', 'postcss-loader']
			}
		]
	},
	plugins: [
		new OptimizeCSSAssetsPlugin({}),
		// Warn if bundle includes the same package more than once
		new DuplicatePackageCheckerPlugin({
			verbose: true
		}),
		new webpack.ProvidePlugin({
			globalize: path.resolve(__dirname, 'src/i18n/parseString.js'),
		}),
		new webpack.ContextReplacementPlugin(
			/highlight\.js\/lib\/languages$/,
			new RegExp(`^./(${['javascript', 'python', 'sql'].join('|')})$`)
		),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, 'src', 'assets', 'fonts'),
			to: 'assets_proov/fonts',
		},
		// amChart images
		{
			from: path.resolve(__dirname, 'node_modules/@proov/amcharts3/amcharts/images/lens.svg'),
			to: path.resolve(__dirname, 'build/assets_proov/images')
		},
		{
			from: path.resolve(__dirname, 'node_modules/@proov/amcharts3/amcharts/images/dragIconRoundBig.svg'),
			to: path.resolve(__dirname, 'build/assets_proov/images')
		},
		// Copy amChart export dependency libs
		{
			from: 'node_modules/@proov/amcharts3/amcharts/plugins/export/libs',
			ignore: ['!*.min.js'],
			to: 'js/plugins/export/libs'
		},
		{
			from: 'node_modules/@proov/amcharts3/amcharts/plugins/export/libs/pdfmake/vfs_fonts.js',
			to: 'js/plugins/export/libs/pdfmake/vfs_fonts.js'
		},
		{
			from: 'node_modules/@proov/amcharts3/amcharts/plugins/export/shapes',
			to: 'js/plugins/export/shapes'
		},
		{
			from: 'favicon.ico',
			to: 'favicon.ico'
		}
		])
	]
};
