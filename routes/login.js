var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function (req, res) {
  res.render("login");

});

router.post('/', passport.authenticate("local", {
  successRedirect: "/secret",
  failureRedirect: "/login"
}), function (req, res) {

});

module.exports = router;
