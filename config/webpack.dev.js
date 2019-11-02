const path = require('path');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    quiet: true,
    hot: true,
    open: true,
    compress: true
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.js'
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Application is running here http://localhost:3000']
      }
    })
  ]
});
