var app = require('../app.js');
var mongoose = require('mongoose');
var config = require('config');
var http = require('http');
var Browser = require('zombie');

mongoose.Promise = global.Promise;

before(function() {
    var url = config.get('MONGO_URL')
    mongoose.connect(url, {useMongoClient: true});
    this.server = http.createServer(app).listen(3000);
    // initialize the browser using the same port as the test application
    this.browser = new Browser({ site: 'http://localhost:3000' });
});

after(() => {
    mongoose.connection.db.dropDatabase()
    mongoose.connection.close(function () {
        console.log('Mongoose connection disconnected');
    });
});
