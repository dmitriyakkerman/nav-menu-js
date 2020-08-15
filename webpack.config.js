let path = require('path');
let webpack = require('webpack');

module.exports = {
  watch: true,
  entry: {
    'nav-menu': './src/js/nav-menu.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].min.js'
  }
};