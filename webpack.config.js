const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './test/test.ts',
  devServer: {
    static: [path.resolve(__dirname, 'lib')],
    host: '0.0.0.0',
    port: '3000'  
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].bundle.js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hhh',
      template: 'test/index.html'
    }),
  ],
  module: {
    rules: [{
      test: /\.ts$/,
      use: {
        loader: 'ts-loader',
      },
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
