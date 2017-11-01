var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app.js');
var should = chai.should();
var expect = require('chai').expect ;


chai.use(chaiHttp);

describe('Spaces', function(){
  it('should list all the spaces on /spaces GET', function(done){
    chai.request(app)
    .get('/spaces')
    .end(function(err, res){
      // res.should.have.status(200);
       expect(res).to.have.status(200);
      done();
  }); // end
}); // it
}); //describe
