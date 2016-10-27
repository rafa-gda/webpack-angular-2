var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    // Used by HtmlWebpackPlugin to inject build files
    publicPath: 'http://localhost:8080/',
    // Used by HtmlWebpackPlugin to inject build files
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    // Extracts CSS from JS into external .css that HtmlWebpackPlugin inscribes into the index.html
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
