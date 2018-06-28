const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        }, {
          loader: 'sass-loader',
        }],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],

};
