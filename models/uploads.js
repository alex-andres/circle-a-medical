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

const uploadsDB = (obj, cb) => {
    uploadModel.create(obj, cb);
};

const uploadedFiles = uploadModel.find({});

const deleteFile = fileName => uploadModel.find({ fileName }).remove();

module.exports = {
    uploadsDB,
    uploadedFiles,
    deleteFile,
    uploadModel
};