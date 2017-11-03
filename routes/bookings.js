var express = require('express');
var Space = require('../models/space');
var Booking = require('../models/booking');
var router = express.Router();
var mongoose = require('mongoose');

/*
 * GET /spaces route to retrieve all the spaces.
 */
router.get('/', function(req, res){
    var id = req.query.spaceId;
    console.log(id)
    Space.findOne({ _id: id })
        .populate('bookings')
        .exec(function (err, space) {
            if(err) return console.log(err);
            // console.log('The object is %s', space);
            res.render('bookings/new', { space: space });
    });
});

/*
 * POST /spaces rout to create a new post.
 */
router.post('/', function(req, res){
    var id = req.query.spaceId;

    Space.findOne({_id: id}, function(err, space){
        if(err) return console.log(err);

        var booking = new Booking({
            _id: new mongoose.Types.ObjectId(),
            date: req.body.date,
            space: space._id
        });

        booking.save(function (err) {
            if(err) return console.log(err);
            //then add story to person
            space.bookings.push(booking);
            space.save(function (err) {
                if (err) throw err;
                res.redirect('/spaces');
            });
        });

    });
});

module.exports = router;
