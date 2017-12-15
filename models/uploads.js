const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    fileName: String,
    xlsxPath: String,
    jsonPath: String,
    creationTime: String,
    categories: {
        type: Array,
        'default': []
    },
    units: {
        type: Array,
        'default': []
    },
    attributes: {
        type: Array,
        'default': []
    },
    isProcessed: Boolean
});

const newUpload = mongoose.model('Upload', uploadSchema);

const uploadsDB = obj => {
    newUpload.create(obj);
};

module.exports = uploadsDB;