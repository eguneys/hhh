const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './dist/test/test.js',
  output: {
    path: path.resolve(__dirname, 'test-bundles'),
    filename: '[name].bundle.js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'kcapeW',
      template: 'test/index.html'
    }),
  ],
  module: {
    rules: [{
      test: /\.m?js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env'
            ]
          ]
        }
      }
    }]
  }
};
