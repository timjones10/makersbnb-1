var mongoose = require('mongoose');

var spaceSchema = new mongoose.Schema({
    title       : { type: String},
    description : { type: String},
    price       : { type: Number},
    bookings : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }]
});

var Space = mongoose.model('Space', spaceSchema);

module.exports = Space;
