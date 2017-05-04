const path = require('path');
const express = require('express');
const port = 1337;
const app = express();

//server logic / server routes comes here ABOVE the webpack !!
//exmaple
//app.get('/hello', (req, res) => res.send({ hi: 'hello word'}));


if(process.env.NODE_ENV !== 'production') {
  //importony in case of prod
  const webpackMiddleware = require('webpack-dev-middleware');  //intercept requests
  const webpack = require('webpack'); //webpack itself
  const webpackConfig = require('./webpack.config.js'); //how to use webpack
    //lol syntax read from right to left to get understanding
    //care by setting the the env.= production, it may differ form hoster to hoster
    app.use(webpackMiddleware(webpack(webpackConfig)));
}
else {
    //use dist directory and make it availbe
    app.use(express.static('dist'));
    //get req to any * route send them to index,(react router hacky for browserHistory)
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}

//heroku and aws want to bind a prot
app.listen(process.env.PORT || port, () => console.log('server listing to port '+ port));
