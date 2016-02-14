const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/public/javascripts`,
    filename: 'bundle_[hash].min.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        compact: false,
      },
      exclude: /node_modules/,
    }, {
      test: /\.vue$/,
      loader: 'vue',
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000',
    }],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new CleanWebpackPlugin('public/javascripts'),
    new AssetsPlugin({
      filename: 'assets.json',
      path: `${__dirname}/public`,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ],
};
