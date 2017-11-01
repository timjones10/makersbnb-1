var express = require('express');
var userRoute = express.Router();

/* GET users listing. */
userRoute.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = userRoute;
