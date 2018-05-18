const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
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


  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: './dist',
    hot: true,
  },

});
