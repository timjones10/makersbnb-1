var mongoose = require('mongoose');

var bookingSchema = new mongoose.Schema({
    date    : { type: Date, unique: true },
    space   : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Space' }]
});

var Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;