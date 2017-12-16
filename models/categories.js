var mongoose = require('mongoose');

var newSchema = new mongoose.Schema({}, { strict: false });
var newCategory = mongoose.model('Category', newSchema);

var categories = function(obj) {
    newProduct.create(obj);
};

module.exports = categories;