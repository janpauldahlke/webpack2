//there are minimum two properties to work
// 1. entrypoint
// 2. output

const path = require('path'); //nodeJs module
//get TextPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js', //relative path from where webpack.config.js is
  //aleays object
  output : {
    path : path.resolve(__dirname, 'build'),      //absolute path // to generate this we use a node helper // resolve can help for windows and mac and filesystems
    filename : 'bundle.js'
  },
  module: {
    rules : [         // array of rules for loaders
      {
        use: 'babel-loader',                //use property to tell what loader
        test: /\.js$/                       //regex on filetype //apply to what files is defined here
      },
      {
        loader: ExtractTextPlugin.extract({ //need key loader form webpack1 cuz text extract needs this syntax
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.jpe?g|png|gif|svg$/,        //img regex take care here
        use: [
          { //url loader needs addtional configuartion //loader handles differnt img sizes differently
            loader: 'url-loader',
            options: { limit : 40000}       //any image >40kb save it as single file, else include it in our bundle.js a RW DATA
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;
