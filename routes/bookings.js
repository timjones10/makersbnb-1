var express = require('express');
var Space = require('../models/bookedDates');
var router = express.Router();

/*
 * GET /spaces route to retrieve all the spaces.
 */

router.get('/', function(req, res){
    Space.find({}, function(err, spaces){
        if(err) return console.log(err);
        res.render('bookings/new', { spaces: spaces });
    })
});

router.get('/addspace', function(req, res){
    res.render('spaces/addspace');
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

//export all the functions
module.exports = router;
