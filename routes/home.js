var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render("secret");
    //res.render('index', {title: 'Makers B & B'});
});


module.exports = router;
