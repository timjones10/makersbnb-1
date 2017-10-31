function Property(title, description, price) {
    this._title = title;
    this._description = description;
    this._price = price;
}

Property.prototype.title = function() {
    return this._title;
};

Property.prototype.description = function() {
    return this._description;
};

Property.prototype.price = function() {
    return this._price;
};

module.exports = Property;
