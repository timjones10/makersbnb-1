var mongoose = require('mongoose');

var bookedDateSchema = new mongoose.Schema({
    date       : Date,
    bookedForSpace: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Space' }]
});

var BookedDate = mongoose.model('Space', bookedDateSchema);

module.exports = BookedDate;