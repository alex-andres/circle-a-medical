var mongoose = require('mongoose');

var newSchema = new mongoose.Schema({}, { strict: false });
var newProduct = mongoose.model('Product', newSchema);

var product = function(obj) {
    newProduct.create(obj);
};

module.exports = product;