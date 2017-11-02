var morgan = require('morgan');
bodyParser = require('body-parser');
var assert = require('assert');



describe('Spaces', function(){

  before(function() {

  });

  // load the contact page
  before(function(done) {
    this.browser.visit('/spaces', done);
  });

  describe('Get', function() {

    it('should display spaces page', function() {
      assert.ok(this.browser.success);
    });

  });

  describe('Post', function() {
//this is left over from a test which was removed
  });

  describe('Post', function() {

    before(function(done) {
      this.browser.visit('/spaces/addspace', done);
    });

    before(function(done) {
      this.browser.fill('input[name=title]', 'Test Title Zombie');
      this.browser.fill('input[name=description]', 'Zombie');
      this.browser.fill('input[name=price]', 20);
      this.browser.pressButton('Submit', done);
    });

    it('posting the form', function() {
      console.log(this.browser.text('ul'))

      assert(this.browser.text('li'), 'Test Title Zombie');
    });
  });
})




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
