var app = require('../app.js');
var mongoose = require('mongoose');
var config = require('config');
var http = require('http');

var mongoose = require('bluebird');

before(function() {
    var url = config.get('MONGO_URL')
    mongoose.connect(url, {useMongoClient: true});
    this.server = http.createServer(app).listen(3000);
});

after(() => {
    mongoose.connection.db.dropDatabase()
    mongoose.connection.close(function () {
        console.log('Mongoose connection disconnected');
    });
});
