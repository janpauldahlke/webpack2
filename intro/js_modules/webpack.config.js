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
  }
};

module.exports = config;
