const mongoose = require('mongoose');

const attrSchema = new mongoose.Schema({
    databaseName: {
        type: String,
        index: true,
        unique: true,
        required: true
    },
    fields: {
        type: Array,
        default: []
    }
});

const attrModel = mongoose.model('Attribute', attrSchema);

module.exports = attrModel;