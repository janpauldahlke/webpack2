//there are minimum two properties to work
// 1. entrypoint
// 2. output

const path = require('path'); //nodeJs module

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
        test: /\.js$/                     //regex on filetype //apply to what files is defined here
      },
      {
        use: ['style-loader', 'css-loader'],    //use array here, due css needs to perform to both loaders style loader before css-loader!! //loaders are applied from right to left!!!              
        test: /\.css$/
      }
    ]
  }
};

module.exports = config;
