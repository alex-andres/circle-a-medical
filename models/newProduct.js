var mongoose = require('mongoose');

var product = function(obj) {
    var newSchema = new mongoose.Schema({}, {strict: false});
    var newProduct = mongoose.model('Product', newSchema);
    newProduct.create(obj);
};

module.exports = {product}

