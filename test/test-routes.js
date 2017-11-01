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

it('should show a title field', function(){
  chai.request(app)
  .post('/spaces')
  .send({title: 'cottage', description: 'large', price: 8 })
  .end(function(err, res){
  //  console.log(res.body)
    expect(res.body).to.include('cottage');
  });
});
}); //describe
