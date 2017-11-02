var mongoose = require('mongoose');

var searchdateSchema = new mongoose.Schema({
    startdate : { type: String},
    enddate : { type: String},
});

var Searchdate = mongoose.model('Searchdate', searchdateSchema);

module.exports = Searchdate;
