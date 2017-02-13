const webpack = require('webpack');
const path = require('path');

const config = {
  entry: path.resolve(__dirname, '/src/index.js)',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '/src'),
    filename: outputFile,
    library: 'colors.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  rules: {
    loaders: [
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
    root: path.resolve('./src'),
    extensions: ['', '.ts']
  }
};

module.exports = config;
