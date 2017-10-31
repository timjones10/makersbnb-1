
describe("User", function() {

  var user;

  beforeEach(function() {
    user = new User();
property = jasmine.createSpyObj('property',['title']);

  });

  it("can add a property", function(){
    user.addProperty(property);
    expect(user.properties()).toContain(property);
  });
});
