var Booking = require('../../models/booking');
var moment = require('moment');

describe('Booking Unit Tests', function() {
    describe('#save()', function() {
        before(function(){
            var date = moment("2017-11-04").startOf('day');
            this.booking = new Booking({ date: date });
        });

        it('should save without error', function(done) {

            this.booking.save(function(err) {
                if (err) done(err);
                else done();
            });
        });
    });
});