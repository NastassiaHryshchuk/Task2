const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',

  entry: ['babel-polyfill', './src/server/index.js'],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'env',
            'stage-2',
          ],
        },
      },
      {
        test: /\.s?css$/,
        use: [{
          loader: 'css-loader/locals',
          options: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },

  externals: [webpackNodeExternals()],
};
