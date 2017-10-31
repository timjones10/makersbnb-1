function User() {
  this._properties = [];
}

User.prototype.properties = function() {
  return this._properties;
};

User.prototype.addProperty = function(property) {
   this._properties.push(property);
};

module.exports = User;
