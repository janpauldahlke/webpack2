var webpack = require('webpack');
var path = require('path');
//helper to solve the script tag index.html problem, when codesplitting
var HtmlWebpackPlugin = require('html-webpack-plugin');


//passing a name for each lib that should be included in vendor
//check all dependencies from package.json
const VENDOR_LIBS = [
  'faker', 'lodash', 'redux', 'react', 'react-redux', 'react-dom', 'react-input-range', 'redux-form', 'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'       //[name] refers to entry keys
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
  },
  plugins: [
    //if any modules are duplicates in bundle and vendor, only include them in name 'vendor'
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      //provide a template for this to prevent plugin to generate a simple html
      //so integrate template and make it to condigurations
      template: './src/index.html'
    })
  ]
};
