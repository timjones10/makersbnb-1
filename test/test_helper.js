// process.env.NODE_ENV = 'test';
var mongoose = require('mongoose');
var config = require('config');

mongoose.Promise = global.Promise;

before(function() {
    var url = config.get('MONGO_URL')
    mongoose.connect(url, {useMongoClient: true});

});

after(() => {
    mongoose.connection.db.dropDatabase()
    mongoose.connection.close(function () {
        console.log('Mongoose connection disconnected');
    });
});
