var express = require('express');
var router = express.Router();
  User = require("../models/users");


/* GET register page. */
router.get('/', function (req, res, next) {
  res.render("register");
    //res.render('index', {title: 'Makers B & B'});
});

router.post('/', function (req, res) {
  req.body.username
  req.body.password
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
    if(err){
      console.log(err);
      return res.render('register');
    }
    passport.authenticate("local")(req,res,function(){
      res.redirect("/secret");
    });
  });
});


module.exports = router;
