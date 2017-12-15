const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    fileName: String,
    xlsxPath: String,
    jsonPath: String,
    recordsCount: Number,
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

const uploadModel = mongoose.model('Upload', uploadSchema);

const uploadsDB = obj => {
    uploadModel.create(obj);
};

uploadedFiles = (callback) => {
    uploadModel.find({}).then(res => {
        // if (err) {
        //     console.log('error', err);
        // };
        console.log('success');
        callback(res);
    });
};

module.exports = {
    uploadsDB,
    uploadModel
};