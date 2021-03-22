const path = require('path');
//const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const copyPlugins = new CopyWebpackPlugin({
  patterns: [
    { from: path.resolve(__dirname, 'src/assets/', 'images'), to: 'images' }
  ]
})

module.exports = [
  //new ForkTsCheckerWebpackPlugin(),
  copyPlugins
];
