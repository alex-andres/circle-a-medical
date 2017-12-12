var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var categories = function(obj) {
    var newSchema = new mongoose.Schema({}, {strict: false});
    var newCategory = mongoose.model('Category', newSchema);
    newProduct.create(obj);
};

module.exports = {categories}