// var chai = require('chai');
// var chaiHttp = require('chai-http');
var app = require('../app.js');
// var should = chai.should();
// var expect = require('chai').expect ;
var morgan = require('morgan');
bodyParser = require('body-parser');
var Browser = require('zombie');
var assert = require('assert');
var http = require('http');
// chai.use(chaiHttp);


describe('Spaces', function() {

  before(function() {
    this.server = http.createServer(app).listen(3000);
    // initialize the browser using the same port as the test application
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  // load the contact page
  before(function(done) {
    this.browser.visit('/spaces', done);
  });

  it('should display spaces page', function() {
    assert.ok(this.browser.success);

    // assert.equal(this.browser.text('h1'), 'Contact');
    // assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
  });


});



//
// describe('Spaces', function(){
//   it('should list all the spaces on /spaces GET', function(done){
//     chai.request(app)
//     .get('/spaces')
//     .end(function(err, res){
//       // res.should.have.status(200);
//        expect(res).to.have.status(200);
//       done();
//   }); // end
// }); // it
//
// it('should show a title field', function(done){
//   chai.request(app)
//   .post('/spaces')
//   .field('title', 'cottage')
//   .end((err, res)=>{
//     // expect(res).to.include({title: 'cottage'});
//     res.body.should.be.a('object');
//     console.log(res);
//     done();
//   });
// });
//
// // it('should show a title field', function(){
// //   chai.request(app)
// //   .post('/spaces')
// //   .send({title: 'cottage', description: 'large', price: 8 })
// //   .end(function(err, res){
// }); //describe
