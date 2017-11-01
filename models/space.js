var mongoose = require('mongoose');

var spaceSchema = new mongoose.Schema({
    title       : { type: String},
    description : { type: String},
    price       : { type: Number}
});

var Space = mongoose.model('Space', spaceSchema);

module.exports = Space;
