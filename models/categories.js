const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    parent: String,
    path: {
        type: String,
        index: true,
        unique: true
    }
});

const catModel = mongoose.model('Cat', catSchema);

module.exports = catModel;