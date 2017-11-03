var express = require('express');
var router = express.Router();
  User = require("../models/users");


  var passport = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

  var app = express();
  var mongoose = require("mongoose");
  mongoose.connect("mongodb://localhost/auth_demo_app", {
    useMongoClient: true
  });
    mongoose.Promise = global.Promise;


  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(User.authenticate()));

  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

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

router.post('/', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    var price = req.body.price;
    Space.create({ title: title, description: description,
                   price: price
        }, function(err, space){
            if(err) return console.log(err);
            res.redirect('/spaces');
    });
});

module.exports = router;
