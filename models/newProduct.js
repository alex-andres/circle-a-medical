var mongoose = require('mongoose');

var product = function(obj) {
    var newSchema = new mongoose.Schema({}, { strict: false });
    var newProduct = mongoose.model('Product', newSchema);

    if (!Array.isArray(obj)) {
        obj.map(val => {
            newProduct.create(val);
        });
    } else {
        newProduct.create(obj);
    };
};

module.exports = { product };