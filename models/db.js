var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var uri = 'mongodb://localhost:27017/makersbnb';
mongoose.connect(uri, {useMongoClient: true });
