var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules : [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/         //exclude: do not apply babel on node_modules //save time and ressources when we assume, that node_modules come as ES5 == best practice
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  }
};
