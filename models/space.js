var mongoose = require('mongoose');

var spaceSchema = new mongoose.Schema({
    title       : { type: String, required: true },
    description : { type: String, required: true, trim: true},
    price       : { type: Number, required: true}
});

var Space = mongoose.model('Space', spaceSchema);

module.exports = Space;