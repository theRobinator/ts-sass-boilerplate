const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: "./src/ts/index.ts"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new CopyPlugin([{
      from: 'src/**/*.html',
      to: Path.join(__dirname, 'dist'),
      transformPath: (target, absolute) => {
        return target.substr('src/'.length);
      }
    }]),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['!*.html'],
    }),
  ],
  module: {
    rules: [
      {test: /\.tsx?$/, loader: 'ts-loader'},
      {test: /\.scss$/, use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "sass-loader"}
      ]},
      {test: /[\\/]assets[\\/]/, loader: 'file-loader'}
    ]
  }
};
