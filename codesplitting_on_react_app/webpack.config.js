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
    filename: '[name].[chunkhash].js'       //[name] refers to entry keys
  },                                        //[chunkhash] helps by caching and new loading forthe browser
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
      names: ['vendor', 'manifest']     //creates manifest.js
    }),
    new HtmlWebpackPlugin({
      //provide a template for this to prevent plugin to generate a simple html
      //so integrate template and make it to condigurations
      template: './src/index.html'
    }),
    //for deploying on static
    //react needs window scoped variable NODE_ENV
    //we export this NODE_ENV to window by using DefinePlugin
    //make usage of this in package.json script build by setting NODE_ENV=production
    //webpack - p = minify!! production mode want it as small as possible
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
