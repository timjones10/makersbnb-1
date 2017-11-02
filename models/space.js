var mongoose = require('mongoose');

var spaceSchema = new mongoose.Schema({
    title       : { type: String},
    description : { type: String},
    price       : { type: Number},
    bookedDates : [{ type: mongoose.Schema.Types.ObjectId, ref: 'BookedDate' }]
});

var Space = mongoose.model('Space', spaceSchema);

module.exports = Space;
