describe("Property", function() {

    var Property = require('../lib/property.js');

    console.log(Property)

    var property;

    beforeEach(function() {
        var title = "Cottage";
        var description = "Two up, two down, thatched";
        var price = 100;
        property = new Property(title, description, price);
        console.log(property)
    });

    it("has the property 'title'", function() {
        expect(property.title()).toEqual("Cottage");
    });

    it("has the property 'description'", function() {
        expect(property.description()).toEqual("Two up, two down, thatched");
    });

    it("has the property 'price'", function() {
        expect(property.price()).toEqual(100);
    });
});