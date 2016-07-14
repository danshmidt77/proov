import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

console.log('webpack', __dirname);
export default {
  debug: true,
  devtool: ['cheap-module-eval-source-map', 'source-map'],
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/app'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'app.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css")
  ],
  module: {
    loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['react-hot', 'babel']},
            {test: /\.scss$/,  loader: ExtractTextPlugin.extract(
    "style",
    "css!sass")}
    ]
  }
};
