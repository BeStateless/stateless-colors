const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    path: 'dist',
    filename: 'colors.js',
    library: '@stateless/colors',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};

module.exports = config;
