var mongoose = require('mongoose');
var config = require('config');

mongoose.connect(config.get('MONGO_URL'), {useMongoClient: true });
